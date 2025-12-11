# User Journey Patterns for Modern Web Applications

> A platform-agnostic framework for designing intentional user journeys beyond traditional funnels.

---

## 1. Introduction

### The Problem

Modern web applications often fall into two traps:

1. **"Here's the tool, figure it out"** — Feature-rich apps with no guided journey
2. **"Follow this exact path"** — Rigid funnels inherited from page-based architectures

Neither serves users well. The first overwhelms; the second constrains.

### The Evolution

| Era | Paradigm | Constraint |
|-----|----------|------------|
| 2000s | Multi-page funnels | Technology forced linear progression |
| 2010s | Single-page apps | Gained flexibility, lost intentionality |
| 2020s | State-based journeys | Best of both: guided but adaptive |

**Key insight:** We should optimize for *user arrival at success states*, not *completion of prescribed paths*.

---

## 2. Pattern Catalog

### 2.1 Linear Funnel

```
[Entry] → [Step 1] → [Step 2] → [Step 3] → [Success]
```

**Description:** Sequential steps with minimal branching. Each step gates the next.

**Best for:**
- Checkout flows
- Onboarding wizards
- Single-product sales

**React Implementation:**
```tsx
const [step, setStep] = useState(1);
const steps = [<Step1 />, <Step2 />, <Step3 />, <Success />];
return steps[step - 1];
```

**Example:** iEmbro-S `VisualGuide` component — 5 sequential panels ending with "I am ready!"

---

### 2.2 Skill Tree

```
           [GOAL]
          /      \
     [Path A]   [Path B]
       /  \         \
    [a1]  [a2]      [b1]
```

**Description:** Multiple valid paths to the same goal. User chooses based on preference.

**Best for:**
- Feature-rich applications
- Learning platforms
- Apps with multiple user personas

**React Implementation:**
```tsx
const [unlockedPaths, setUnlockedPaths] = useState(['start']);
const canAccess = (path) => unlockedPaths.includes(path);
// Render available branches based on unlocked paths
```

**Metrics:** Track which paths users take; optimize each branch independently.

---

### 2.3 Graph / Network

```
[Entry] ──→ [Node A] ←──→ [Node B]
   ↓            ↘         ↗
[Node C] ──────→ [SUCCESS]
```

**Description:** Non-linear, any-to-any navigation. Users can loop, backtrack, explore.

**Best for:**
- Complex tools with multiple features
- Exploratory applications
- Reference/documentation sites

**React Implementation:**
```tsx
const [visitedNodes, setVisitedNodes] = useState(new Set(['entry']));
const [currentNode, setCurrentNode] = useState('entry');
// Navigation updates both current position and visited history
```

**Metrics:** Node visit frequency, paths to success, abandonment points.

---

### 2.4 Altitude / Levels

```
Level 3: Power User    ████████████
Level 2: Engaged       ████████
Level 1: Curious       ████
Level 0: Arrived       █
```

**Description:** Focus on user's current state/engagement, not which path they took.

**Best for:**
- Gamified experiences
- Engagement-focused products
- Apps where "success" is ongoing, not one-time

**React Implementation:**
```tsx
const [userLevel, setUserLevel] = useState(0);
const levelThresholds = { actions: 5, engagement: 10, mastery: 20 };
// Level up based on cumulative actions, not specific sequence
```

**Key insight:** LLMs don't follow funnels — they converge on answers through any path. Users can too.

---

## 3. Implementation Patterns for React/SPA

### State Management Options

| Approach | Persistence | Complexity | Best For |
|----------|-------------|------------|----------|
| `useState` | Session only | Low | Simple wizards |
| `localStorage` | Browser | Medium | Return visitors |
| URL params | Shareable | Medium | Gift/referral links |
| Backend + Auth | Permanent | High | Logged-in users |

### Component Patterns

| Component | Purpose | Example |
|-----------|---------|---------|
| **Gatekeeper** | Block access until action taken | iEmbro-S auth wall |
| **ProgressTracker** | Show journey position | Stepper UI |
| **LevelIndicator** | Show altitude/engagement | XP bar, badge system |
| **BranchSelector** | Present path choices | Skill tree UI |

### URL-Based State (Shareable Journeys)

```tsx
// iEmbro-S pattern: theme + gift state in URL
const params = new URLSearchParams(window.location.search);
const isGift = params.get('gift') === 'true';
const themHash = params.get('universe');
```

This enables viral mechanics: users share links that drop others into specific journey states.

---

## 4. Project Recommendations

### iScamHunter (This Project)

| Aspect | Recommendation |
|--------|----------------|
| **Primary Pattern** | Altitude + Linear checkout |
| **Rationale** | Merch sales need linear checkout; community engagement is altitude-based |
| **Key Components** | Hero story → Product showcase → Checkout flow |
| **Engagement Mechanics** | Joke feed, scam tips, community badges |

### iEmbro-S

| Aspect | Recommendation |
|--------|----------------|
| **Primary Pattern** | Skill Tree (already implemented) |
| **Existing Components** | Gatekeeper, VisualGuide, GiftBox |
| **Enhancement** | Add progress persistence, track feature unlocks |

### iForeclosed

| Aspect | Recommendation |
|--------|----------------|
| **Primary Pattern** | Graph/Network |
| **Rationale** | Multi-feature tool, users explore non-linearly |
| **Key Addition** | "Getting Started" overlay, feature discovery hints |

### PronunCo

| Aspect | Recommendation |
|--------|----------------|
| **Primary Pattern** | Altitude |
| **Rationale** | Language learning is progressive, not one-time |
| **Key Mechanics** | Skill levels, streak tracking, mastery indicators |

### BTP-core

| Aspect | Recommendation |
|--------|----------------|
| **Primary Pattern** | Skill Tree |
| **Rationale** | Multiple personas (speaker, coach, student) have different paths |
| **Key Addition** | Persona selector at entry, path-specific onboarding |

---

## 5. Metrics & Success Criteria

### Pattern-Specific Metrics

| Pattern | Primary Metric | Secondary Metrics |
|---------|----------------|-------------------|
| Linear Funnel | Step completion rate | Drop-off per step, time to complete |
| Skill Tree | Branch utilization | Path diversity, goal achievement |
| Graph | Node coverage | Time on site, return visits |
| Altitude | Level distribution | Level-up rate, retention by level |

### Universal Events to Track

```javascript
// Suggested analytics events
trackEvent('journey_start', { entry_point, timestamp });
trackEvent('level_change', { from_level, to_level, trigger });
trackEvent('goal_achieved', { goal_type, path_taken });
trackEvent('feature_discovered', { feature_id, discovery_method });
```

---

## 6. Summary

| Old Thinking | New Thinking |
|--------------|--------------|
| "Everyone must follow this funnel" | "Success is reachable from many paths" |
| "Optimize funnel steps" | "Optimize for altitude gains" |
| "Drop-off is failure" | "Exploration is engagement" |
| "Linear is simple" | "Adaptive is better" |

**The goal isn't to force a path. It's to ensure wherever users go, they can reach success.**

---

*Document version: 1.0*  
*Created: 2025-12-10*  
*Applies to: iScamHunter, iEmbro-S, iForeclosed, PronunCo, BTP-core*
