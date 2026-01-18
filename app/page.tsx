import Link from "next/link";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <div className="flex justify-center items-center grid place-content-center">
      

      
      <Button>
        <Link href="/product">Tambah Product</Link>
      </Button>


    </div>
  );
}
