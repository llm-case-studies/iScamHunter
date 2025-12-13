# Product Strategy & Sourcing Vision

> **"Not just another T-shirt store."**

This document captures the "Big Picture" differentiation strategy for iScamHunter, specifically focusing on complex hardware sourcing and AI-driven procurement.

---

## 1. The "Zendrop Failure" Context

In the previous research phase (`m-Beacon` Reference), we established that generic dropshipping platforms like Zendrop "failed miserably" at supporting:
1.  **Hardware Bundles:** e.g., "OrangePi 5 + Custom SD Card"
2.  **Custom Procurement:** Sourcing specific anti-scam tools not in standard catalogs
3.  **Complex SKUs:** Items requiring multi-step fulfillment (hardware from A, software from B)

**The Solution:** The new iScamHunter platform uses a **DB-backed Product Spec** model that is provider-agnostic. We are not tied to Zendrop. We interact with *any* fulfillment API via our own abstraction layer.

---

## 2. Advanced Product Specs (YAML Vision)

To support the "iHomeNerd Starter Kit" (an anti-scam appliance), the platform supports a rich specification format:

```yaml
name: "iHomeNerd Starter Kit"
sku: "IHN-KIT-001"
components:
  - type: "hardware"
    item: "orangepi-5-plus"
    source: "Shenzhen-Direct-API"
    specs:
      ram: "16GB"
      storage: "NVMe"
  - type: "media"
    item: "mbeacon-boot.img"
    target: "ssd-128gb"
    source: "Internal-Fulfillment"
fulfillment: "multi-step-pipeline"
```

### Why this matters:
- **Zendrop** sees one product = one supplier.
- **iScamHunter** sees one product = `n` components from `n` suppliers.

---

## 3. AI-Assisted Sourcing (The Agent)

We are building towards an **"AI Procurement Agent"** that:
1.  Scans global marketplaces (AliExpress, DigiKey) for component availability.
2.  Optimizes the BOM (Bill of Materials) price in real-time.
3.  Updates the `Product` database with the best current fulfillment method.

**Example Flow:**
> User orders "Starter Kit" → Agent checks OPI5 stock → Routes hardware order to best vendor → Triggers internal SD card flashing → Bundles tracking codes.

---

## 4. Hardware Implementation (OrangePi 5)

The target hardware for our "Scam Hunter Node" is the **OrangePi 5 Plus**.
- **Reasoning:** High AI inference capability (NPU) for local scam detection.
- **Goal:** Users install this device to protect their home network.
- **Fulfillment:** Requires buying the board, case, and power supply, then flashing our custom OS. This is impossible on Shopify/ClickFunnels without massive manual overhead.

---

## 5. Deployment Readiness Criteria

To enable this "Big Picture," the deployed platform must support:
- [x] **Database-driven Catalog:** (`Prisma Product` model)
- [ ] **Rich Product Descriptions:** Displaying specs/details, not just "Hoodie".
- [ ] **Fulfillment Routing:** Ability to split an order (Hoodie -> Zendrop, OPI5 -> Manual).

*Migrated from m-Beacon case study - December 2025*
