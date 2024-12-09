import Link from "next/link"

export default function Home() {
  return (
    <div className="bg-black bg-home-img bg-cover bg-center">
      <main>
        <div>
          <h1>Ryu's Computer<br />Repair Shop</h1>
          <address>
            121, Park Street<br />
            New York, USA
          </address>
          <p>
            24/7 
          </p>
          <Link href="tel:0120-222-222" className="hover:underline">
          0120-222-222
          </Link>
        </div>
      </main>
    </div>
  );
}
