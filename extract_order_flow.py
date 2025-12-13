import bs4
import sys
import os

def clean_and_extract(filepath, title):
    with open(filepath, 'r', encoding='utf-8') as f:
        html = f.read()
    
    soup = bs4.BeautifulSoup(html, 'html.parser')
    
    # Remove clutter
    for tag in soup(['script', 'style', 'head', 'noscript', 'iframe', 'svg']):
        tag.decompose()
        
    # Remove likely editor/UI elements (heuristic)
    for tag in soup.find_all(class_=lambda x: x and ('sidebar' in x.lower() or 'editor' in x.lower() or 'admin' in x.lower() or 'debug' in x.lower())):
        tag.decompose()
        
    markdown = [f"# {title}\n"]
    
    # Extract relevant text blocks
    for element in soup.find_all(['h1', 'h2', 'h3', 'p', 'li', 'blockquote', 'button', 'a']):
        text = element.get_text(strip=True)
        if not text:
            continue
            
        # Skip small utility strings often found in UI
        if len(text) < 3 and element.name not in ['h1', 'h2']:
            continue
            
        if element.name in ['h1', 'h2', 'h3']:
            markdown.append(f"\n{'#' * int(element.name[1:])} {text}\n")
        elif element.name == 'li':
            markdown.append(f"- {text}")
        elif element.name == 'blockquote':
            markdown.append(f"\n> {text}\n")
        elif element.name == 'button':
             markdown.append(f"\n[BUTTON: {text}]\n")
        elif element.name == 'a':
             # Only link if it looks like a CTA
             if len(text) > 20 or 'click' in text.lower() or 'order' in text.lower():
                markdown.append(f"[{text}]({element.get('href', '#')})")
        else:
            markdown.append(f"{text}\n")
            
    return "\n".join(markdown)

funnel_dir = "/media/alex/LargeStorage/Projects/iScamHunter/cf-capture/store"
output_file = "/media/alex/LargeStorage/Projects/iScamHunter/cf-capture/content/lab_page.md"

os.makedirs(os.path.dirname(output_file), exist_ok=True)

with open(output_file, 'w', encoding='utf-8') as f:
    f.write(clean_and_extract(os.path.join(funnel_dir, "Lab_Page.html"), "Lab Page"))
    f.write("\n\n---\n\n")
    f.write(clean_and_extract(os.path.join(funnel_dir, "/dev/null"), ""))

print(f"Extracted content to {output_file}")
