import { SkillLink } from "../components/about-me/skills/skills-graph/skills-graph";
import nodes from "./skillsGraphNodesData";

const links: SkillLink[] = [
  // Frontend connections
  { source: nodes[0], target: nodes[1] }, // TypeScript -> JavaScript
  { source: nodes[0], target: nodes[2] }, // TypeScript -> Angular
  { source: nodes[0], target: nodes[3] }, // TypeScript -> React
  { source: nodes[3], target: nodes[4] }, // React -> Ionic
  { source: nodes[3], target: nodes[5] }, // React -> Next.js
  { source: nodes[1], target: nodes[6] }, // JavaScript -> HTML
  { source: nodes[1], target: nodes[7] }, // JavaScript -> CSS

  // Backend connections
  { source: nodes[8], target: nodes[9] }, // Java -> Spring
  { source: nodes[10], target: nodes[11] }, // PHP -> Laravel
  { source: nodes[28], target: nodes[12] }, // FastApi -> Python

  // Database connections
  { source: nodes[13], target: nodes[9] }, // MySQL -> Spring
  { source: nodes[14], target: nodes[9] }, // PostgreSQL -> Spring
  { source: nodes[15], target: nodes[12] }, // MongoDB -> Python

  // Infrastructure connections
  { source: nodes[16], target: nodes[17] }, // Docker -> Kong
  { source: nodes[16], target: nodes[18] }, // Docker -> Consul
  { source: nodes[16], target: nodes[23] }, // Docker -> Nginx
  { source: nodes[17], target: nodes[18] }, // Kong -> Consul
  { source: nodes[19], target: nodes[20] }, // AWS -> EC2
  { source: nodes[19], target: nodes[21] }, // AWS -> S3
  { source: nodes[19], target: nodes[22] }, // AWS -> Route53

  // Tool connections
  { source: nodes[25], target: nodes[26] }, // Git -> GitHub
  { source: nodes[25], target: nodes[27] }, // Git -> Postman
];
export default links;
