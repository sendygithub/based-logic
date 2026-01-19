import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Bubbles } from "lucide-react";


export default function Home() {
  return (
    <div className="flex justify-center items-center grid place-content-center">
      

      
      <Button>
        <Link href="/product">Tambah Product</Link>
      </Button>
      <Button
        variant="outline"
      >
        <Link href="/artikel"><Bubbles size={20} /></Link>
      </Button>


    </div>
  );
}
