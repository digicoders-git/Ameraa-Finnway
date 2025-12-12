
import Loader from "../components/Loader";
import About from "../pages/About";
import Apply from "../pages/Apply";
import CaseStudies from "../pages/Case-studies";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Process from "../pages/Process";
import Sectors from "../pages/Sector";
import ConstructionRealEstate from "../pages/service/ConstructionRealEstate";
import Government from "../pages/service/Government";
import Healthcare from "../pages/service/Healthcare";
import Hospitality from "../pages/service/Hospitality";
import Manufacturing from "../pages/service/Manufacturing";

const AppRoute = [
  {path: "/", component:Home, name:"Home"},
  {path: "/about", component:About, name:"About"},
  {path: "/sectors", component:Sectors, name:"Sectors"},
  {path: "/process", component:Process, name:"Process"},
  {path: "/case-studies", component:CaseStudies, name:"CaseStudies"},
  {path: "/construction-&-real-estate-finance", component:ConstructionRealEstate, name:"ConstructionRealEstate"},
  {path: "/healthcare-finance", component:Healthcare, name:"Healthcare"},
  {path: "/hospitality-finance", component:Hospitality, name:"Hospitality"},
  {path: "/manufacturing-&-industrial-finance", component:Manufacturing, name:"Manufacturing"},
  {path: "/government-contractors-&-bank-guarantees", component:Government, name:"Government"},
  {path: "/Contact", component:Contact, name:"Contact"},
  {path: "/apply", component:Apply, name:"Apply"},
  {path: "/loader", component:Loader, name:"loader"},
]
export default AppRoute;