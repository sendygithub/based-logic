import Link from "next/link";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <div className="flex justify-center items-center grid place-content-center">
      

      
      <Button className="mt-10 mb-10">
        <Link href="/dashboard">GO!!!!</Link>
      </Button>





    </div>
  );
}
