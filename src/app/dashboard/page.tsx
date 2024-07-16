import { WidgetItem } from "@/components";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function DashboardPage() {

  const session = await getServerSession(authOptions);
  
  if(!session){
    redirect('/api/auht/signin');
  }

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
            
        <WidgetItem title="Usuario conectado">
          <div className="flex flex-col">
            <p>{session.user?.name}</p>
            <p>{session.user?.email}</p>
            <p>{session.user?.image}</p>
          </div>
        </WidgetItem>

      </div> 
  );
}