import {LibraryDashboard} from '@/components/library-dashboard';
const valid=['collection','circulation','acquisition-cataloguing','digital-kpi'];
export default async function ModulePage({params}:{params:Promise<{module:string}>}){
 const {module}=await params;
 return <LibraryDashboard initialModule={valid.includes(module)?module:'overview'}/>;
}
