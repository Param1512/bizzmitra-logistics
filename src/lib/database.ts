import { supabase, SUPABASE_URL } from './supabase';

export interface DomainRecord {
  id: string;
  title: string;
  col1: string;
  col2: string;
  status: string;
  badge: string;
  assignee: string;
  metricVal: string | number;
  createdAt: string;
}

export const DOMAIN_SCHEMA = {
  domainKey: "logistics",
  domainName: "Fleet Dispatch & Telematics Control",
  appTitle: "Apex Brands — Amazon FBA Optimizer",
  entityName: "Consignment Shipment",
  entityPlural: "Shipments",
  tagline: "Consignment routing, GPS vehicle telemetry, and automated electronic Proof-of-Delivery.",
  problemStatement: "We are an Amazon FBA seller managing 450+ ASINs across US and India marketplaces. We are suffering frequent stockouts on top-selling items during seasonal spikes, which crashes our Amazon Best Seller Rank (BSR) and costs us ~$45k/month in lost revenue. Simultaneously, our slow-moving SKUs are hitting 180+ day thresholds, costing $8,000/month in Amazon aged inventory surcharges. Our team is manually reconciling Amazon Seller Central Inventory CSVs in Excel with 3-week lead-time suppliers, leading to inaccurate reorder points and zero predictive visibility.",
  columns: {
  "idLabel": "Waybill Tracking ID",
  "col1Label": "Origin → Destination Hub",
  "col2Label": "Fleet Vehicle & Speed",
  "statusLabel": "Transit Status",
  "assigneeLabel": "Assigned Driver",
  "metricLabel": "ETA Turnaround"
},
  statuses: [
  "Manifest Created",
  "In Transit",
  "Out for Delivery",
  "Delivered & POD Verified"
],
  kpis: [
  {
    "label": "On-Time Dispatch Rate",
    "value": "98.9%",
    "change": "+6.1% vs last month",
    "trend": "up"
  },
  {
    "label": "Fleet Vehicle Utilization",
    "value": "92.4%",
    "change": "42 of 45 en route",
    "trend": "up"
  },
  {
    "label": "Average Delivery TAT",
    "value": "3.2 Hours",
    "change": "Dynamic route optimal",
    "trend": "up"
  },
  {
    "label": "Electronic POD Verification",
    "value": "100%",
    "change": "OTP & Geotagged",
    "trend": "neutral"
  }
],
  funnelStages: [
  {
    "stage": "Consignment Manifest Booking",
    "count": "320 Shipments",
    "pct": 100
  },
  {
    "stage": "Vehicle Load & Weighbridge",
    "count": "290 Dispatched",
    "pct": 90
  },
  {
    "stage": "Corridor GPS Telematics En Route",
    "count": "260 In Transit",
    "pct": 81
  },
  {
    "stage": "Last-Mile POD OTP Verified",
    "count": "240 Delivered",
    "pct": 75
  }
],
  activities: [
  {
    "title": "Waybill #WB-7721 entered Mumbai-Pune Expressway",
    "subtitle": "MH-12-RN-4021 · Speed 62 km/h · ETA 19:30",
    "timeAgo": "5 mins ago"
  },
  {
    "title": "Chilled Pharma consignment #WB-7722 delivered",
    "subtitle": "Geotagged OTP confirmation verified at Gurgaon Lab",
    "timeAgo": "14 mins ago"
  },
  {
    "title": "Dynamic route re-routed Truck #KA-01-3390",
    "subtitle": "Avoided 45 min traffic delay near Hebbal Flyover",
    "timeAgo": "28 mins ago"
  }
],
  modules: [
  {
    "id": "overview",
    "title": "Fleet Command Center",
    "description": "Real-time fleet telematics, corridor velocity, and active manifests",
    "icon": "Building2"
  },
  {
    "id": "portal",
    "title": "Waybill & Shipment Registry",
    "description": "Live GPS positions, transit waybills, and electronic POD audit trail",
    "icon": "Layout"
  },
  {
    "id": "analytics",
    "title": "Logistics Analytics",
    "description": "Turnaround benchmarks, fuel consumption, and on-time performance",
    "icon": "BarChart3"
  }
],
  initialRecords: [
  {
    "id": "WB-7721",
    "title": "Precision Industrial CNC Spare Parts Consignment (480 kg)",
    "col1": "Mumbai Hub → Pune Central",
    "col2": "MH-12-RN-4021 · 62 km/h",
    "status": "In Transit",
    "badge": "On Schedule",
    "assignee": "Driver Ramesh Kumar",
    "metricVal": "1.5h ETA",
    "createdAt": "Today, 17:40"
  },
  {
    "id": "WB-7722",
    "title": "Cold-Chain Temperature Controlled Insulin Diagnostic Kits",
    "col1": "Delhi Airport → Gurgaon Lab",
    "col2": "DL-1A-EE-9012 · 45 km/h",
    "status": "Out for Delivery",
    "badge": "4°C Chilled OK",
    "assignee": "Driver Suresh Yadav",
    "metricVal": "25m ETA",
    "createdAt": "Today, 17:15"
  },
  {
    "id": "WB-7723",
    "title": "Enterprise Server Hardware & Rack Mount Switches",
    "col1": "Bengaluru East → Whitefield Tech Park",
    "col2": "KA-01-MJ-3390 · Geotagged",
    "status": "Delivered & POD Verified",
    "badge": "OTP Confirmed",
    "assignee": "Driver Mohan Gowda",
    "metricVal": "Completed",
    "createdAt": "Today, 16:50"
  },
  {
    "id": "WB-7724",
    "title": "FMCG Bulk Palletized Retail Stock (1.2 Metric Tons)",
    "col1": "Hyderabad Depot → Secunderabad Hub",
    "col2": "TS-09-UB-1102 · Staged",
    "status": "Manifest Created",
    "badge": "Geo-Fenced Route",
    "assignee": "Dispatch Lead Naresh",
    "metricVal": "4.0h ETA",
    "createdAt": "Today, 18:01"
  }
],
};

const STORAGE_KEY = 'bizzmitra-logistics_db_logistics_v1';

const SEED_DATA: DomainRecord[] = [
  {
    "id": "WB-7721",
    "title": "Precision Industrial CNC Spare Parts Consignment (480 kg)",
    "col1": "Mumbai Hub → Pune Central",
    "col2": "MH-12-RN-4021 · 62 km/h",
    "status": "In Transit",
    "badge": "On Schedule",
    "assignee": "Driver Ramesh Kumar",
    "metricVal": "1.5h ETA",
    "createdAt": "Today, 17:40"
  },
  {
    "id": "WB-7722",
    "title": "Cold-Chain Temperature Controlled Insulin Diagnostic Kits",
    "col1": "Delhi Airport → Gurgaon Lab",
    "col2": "DL-1A-EE-9012 · 45 km/h",
    "status": "Out for Delivery",
    "badge": "4°C Chilled OK",
    "assignee": "Driver Suresh Yadav",
    "metricVal": "25m ETA",
    "createdAt": "Today, 17:15"
  },
  {
    "id": "WB-7723",
    "title": "Enterprise Server Hardware & Rack Mount Switches",
    "col1": "Bengaluru East → Whitefield Tech Park",
    "col2": "KA-01-MJ-3390 · Geotagged",
    "status": "Delivered & POD Verified",
    "badge": "OTP Confirmed",
    "assignee": "Driver Mohan Gowda",
    "metricVal": "Completed",
    "createdAt": "Today, 16:50"
  },
  {
    "id": "WB-7724",
    "title": "FMCG Bulk Palletized Retail Stock (1.2 Metric Tons)",
    "col1": "Hyderabad Depot → Secunderabad Hub",
    "col2": "TS-09-UB-1102 · Staged",
    "status": "Manifest Created",
    "badge": "Geo-Fenced Route",
    "assignee": "Dispatch Lead Naresh",
    "metricVal": "4.0h ETA",
    "createdAt": "Today, 18:01"
  }
];

export async function fetchDatabaseRecords(): Promise<DomainRecord[]> {
  try {
    const cached = localStorage.getItem(STORAGE_KEY);
    if (cached) {
      return JSON.parse(cached);
    }
  } catch (e) {
    console.warn('Database cache read error', e);
  }
  return SEED_DATA;
}

export async function persistRecord(item: DomainRecord, existingRecords: DomainRecord[]): Promise<DomainRecord[]> {
  const updated = [item, ...existingRecords];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to persist record', e);
  }
  return updated;
}

export async function updateRecordStatus(id: string, status: string, records: DomainRecord[]): Promise<DomainRecord[]> {
  const updated = records.map(r => r.id === id ? { ...r, status } : r);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to update record in DB', e);
  }
  return updated;
}

export async function deleteRecord(id: string, records: DomainRecord[]): Promise<DomainRecord[]> {
  const updated = records.filter(r => r.id !== id);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to delete record from DB', e);
  }
  return updated;
}
