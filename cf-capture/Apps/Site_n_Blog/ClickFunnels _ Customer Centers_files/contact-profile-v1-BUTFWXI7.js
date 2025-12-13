import {
  CF2Component,
  init_runtime,
  registerComponent
} from "./chunk-IF35HPMH.js";
import {
  init_define_process
} from "./chunk-XDBWEWVZ.js";

// projects/lib/packages/yggdrasil-blueprints/__generated__/packs/contact-profile-v1.ts
init_define_process();

// projects/lib/packages/yggdrasil-blueprints/__generated__/blueprints/contact-profile-v1.ts
init_define_process();
init_runtime();
var ContactProfileV1 = class extends CF2Component {
  constructor(el, runtimeSel) {
    super(el, runtimeSel);
  }
  mount() {
    this.setupListeners();
    this.setupLinks();
  }
  // NOTE: This is workaround for hiding the community link when the logged customer does not have
  // a community. Ideally, this should be done using the parseLiquid method, but currently we
  // dont have a way to enforcing values to be parsed using it, so this link would be always
  // hid in the editor view and the user would not be able to edit it so we are hiding it in
  // runtime for the meantime
  setupLinks() {
    const communityLink = this.element.querySelector(".elCommunityLink");
    if ((!this.site.community_url || this.site.community_url == "") && communityLink) {
      communityLink.style.display = "none";
    }
  }
  setupListeners() {
    const contentElement = $(this.element).parents(".modal-wrapper").get(0) || $(this.element).parents(".pageRoot").get(0);
    const openButton = this.element.querySelector(".elContactProfileIcon");
    const profileModal = this.element.querySelector(".elContactProfileModal");
    const closeOnClickOutside = (evt) => {
      if ($(evt.target).closest(".elContactProfileModal").length) return;
      profileModal.style.display = "none";
      document.removeEventListener("click", closeOnClickOutside);
      window.removeEventListener("resize", handleModalPosition);
    };
    const handleModalPosition = () => {
      const contentRect = contentElement.getBoundingClientRect();
      const elementRect = this.element.querySelector(".elContactProfileWrapper").getBoundingClientRect();
      const profileModalHeight = Number($(profileModal).css("height").split("px")[0]);
      const profileModalWidth = Number($(profileModal).css("width").split("px")[0]);
      if (elementRect.left - profileModalWidth / 2 < 0) {
        profileModal.style.left = `${-(elementRect.left - 5)}px`;
        profileModal.style.transform = "none";
        profileModal.style.right = "auto";
      } else if (elementRect.right + profileModalWidth / 2 > contentRect.width) {
        profileModal.style.left = "auto";
        profileModal.style.transform = "none";
        profileModal.style.right = `${-(contentRect.width - elementRect.right - 5)}px`;
      } else {
        profileModal.style.left = "50%";
        profileModal.style.transform = "translateX(-50%)";
        profileModal.style.right = "auto";
      }
      if (elementRect.bottom + profileModalHeight > contentRect.bottom) {
        profileModal.style.top = "auto";
        profileModal.style.bottom = "110%";
      } else {
        profileModal.style.top = "110%";
        profileModal.style.bottom = "auto";
      }
    };
    openButton?.addEventListener("click", () => {
      if (!$(profileModal).is(":visible")) {
        profileModal.style.display = "flex";
        handleModalPosition();
        setTimeout(() => {
          window.addEventListener("resize", handleModalPosition);
          document.addEventListener("click", closeOnClickOutside);
        });
      } else {
        profileModal.style.display = "none";
        window.removeEventListener("resize", handleModalPosition);
        document.removeEventListener("click", closeOnClickOutside);
      }
    });
  }
  remove() {
    this.element.innerHTML = "";
  }
  render(initializeChildrenInstances = false) {
    const is_server = true;
    const contact = this.contact ?? null;
    const site = this.site ?? { "community_url": [{ "type": "@output", "attrs": { "expression": [{ "kind": 128, "propertyName": "site", "props": [{ "kind": 256, "value": "community_url" }] }] }, "children": [] }] };
    const signInText = this.element.getAttribute("data-param-signInText");
    let html = "";
    {
      html += `<div class="elContactProfileWrapper">`;
      const contact_id = contact?.id;
      if (contact_id) {
        const first_name = contact?.first_name;
        const last_name = contact?.last_name;
        const full_name = contact?.first_name.toString().concat(" ").toString().concat(contact.last_name);
        const avatar_image = contact?.avatar_image;
        if (avatar_image) {
          html += `<img class="elContactProfileIcon elContactProfileDefaultIcon" src="${avatar_image}"/>`;
        } else {
          if (first_name && first_name != "") {
            html += `<div class="elContactProfileIcon elContactProfileIconBg elContactProfileDefaultIcon"><span>`;
            if (last_name && last_name != "") {
              html += `${first_name.slice(0, 1)}${last_name.slice(0, 1)}`;
            } else {
              html += `${first_name.slice(0, 2)}`;
            }
            html += `</span></div>`;
          } else {
            html += `<img class="elContactProfileIcon elContactProfileDefaultIcon" src="/editor/placeholder_avatar.png"/>`;
          }
        }
        html += `<div class="elContactProfileModal"><div class="elContactProfileUserInfo">`;
        if (avatar_image) {
          html += `<img class="elContactProfileIcon elContactProfileModalIcon" src="${avatar_image}"/>`;
        } else {
          if (first_name && first_name != "") {
            html += `<div class="elContactProfileIcon elContactProfileIconBg elContactProfileModalIcon"><span>`;
            if (last_name && last_name != "") {
              html += `${first_name.slice(0, 1)}${last_name.slice(0, 1)}`;
            } else {
              html += `${first_name.slice(0, 2)}`;
            }
            html += `</span></div>`;
          } else {
            html += `<img class="elContactProfileIcon elContactProfileModalIcon" src="/editor/placeholder_avatar.png"/>`;
          }
        }
        html += `<span class="elContactProfileUserName">${full_name}</span><span class="elContactProfileUserEmail">${contact?.email_address}</span></div><div class="elContactProfileLinksWrapper"></div></div>`;
      } else {
        html += `<a data-page-element="LinkNode" class="elTypographyLink elContactProfileSignIn id-LinkNode" href="/contacts/sign_in" target="_self" data-show-button-ids="" data-hide-button-ids="" data-selected="${false}" data-liquid-replace="item"><span>${signInText}</span></a>`;
      }
      html += `</div>`;
    }
    this.replaceContent(html);
    if (initializeChildrenInstances) {
      const scopeToYggRender = this.element.querySelectorAll("[ygg-render]").length > 0;
      const options = { scopeToYggRender };
      CF2Component.hydrateTree(this.element, options);
    }
  }
};
registerComponent("ContactProfile/V1", ContactProfileV1);
window["ContactProfileV1"] = ContactProfileV1;
//# sourceMappingURL=contact-profile-v1-BUTFWXI7.js.map
