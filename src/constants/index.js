import {
  sql_server,
  python,
  excel,
  powerbi,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  vs,
  lds,
  automation,
  dashboard,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "SQL Server", icon: sql_server },
  { title: "Power BI", icon: powerbi },
  { title: "Python", icon: python },
  { title: "Excel", icon: excel },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Data Analyst",
    company_name: "Vida Software SAC",
    icon: vs,
    iconBg: "#161329",
    date: "Nov 2024 - May 2026",
    points: [ 
      "Designed SQL queries to analyze sales and inventory, reducing supply chain reaction time by 30% through automated restocking alerts.",
      "Engineered Python and Azure Data Factory pipelines to ingest high-volume sales data into SQL Server, improving demand visibility by 25%.",
      "Built interactive Sales vs. Stock dashboards to track KPIs and optimize reporting efficiency for stakeholders.",
    ],
  },
  {
    title: "IT Audit Intern/IT Audit Trainee",
    company_name: "Luz del Sur SAA",
    icon: lds,
    iconBg: "#161329",
    date: "Oct 2022 - Nov 2024",
    points: [
      "Created automation scripts for audit procedures, reducing manual data validation efforts by 20%.",
      "Analyzed 10,000+ financial records using Excel to identify irregularities in petty cash and vendor invoicing.",
      "Designed 20+ interactive Power BI dashboards, enabling stakeholders to identify financial anomalies 15% faster.",
    ],
  }
];

export const projects = [
  {
    name: "Amazon Sales",
    description:
      "An interactive dashboard designed to analyze and visualize Amazon sales data, allowing users to track key performance metrics and trends.",
    tags: [
      { name: "Jupyter Notebook", color: "blue-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
      { name: "SQL Server", color: "pink-text-gradient" },
      { name: "Power BI", color: "pink-text-gradient" },
    ],
    image: dashboard,
    source_code_link: "https://eapinedo.github.io/Amazon-Sales/",
  },
  {
    name: "Sales & Inventory Automation",
    description:
      "A streamlined web application built to automate sales tracking and manage inventory levels, ensuring efficient and real-time stock monitoring.",
    tags: [
      { name: "JavaScript", color: "blue-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
      { name: "SQL Server", color: "pink-text-gradient" },
    ],
    image: automation,
    source_code_link: "https://eapinedo.github.io/Sales-Inv-Automation/",
  }
];
