import Image from 'next/image';
import { Beer, BarChart2, Truck, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-blue-50">
      <header className="bg-blue-900 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Brewdash</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#features" className="hover:text-blue-200">Features</a></li>
              <li><a href="#contact" className="hover:text-blue-200">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative py-20">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Brewery"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
            <div className="absolute inset-0 bg-blue-900 bg-opacity-75"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-5xl font-bold mb-4">Revolutionize Your Brewery Management</h2>
              <p className="text-xl mb-8">Streamline operations, boost efficiency, and craft success with Brewdash</p>
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">Get Started</Button>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon={<Beer className="w-12 h-12 text-blue-500" />}
                title="Production Management"
                description="Track and optimize your brewing process from start to finish."
              />
              <FeatureCard
                icon={<BarChart2 className="w-12 h-12 text-blue-500" />}
                title="Inventory Control"
                description="Manage ingredients and finished products with ease."
              />
              <FeatureCard
                icon={<Truck className="w-12 h-12 text-blue-500" />}
                title="Distribution"
                description="Streamline your distribution process and track shipments."
              />
              <FeatureCard
                icon={<DollarSign className="w-12 h-12 text-blue-500" />}
                title="Financial Insights"
                description="Gain valuable insights into your brewery's financial performance."
              />
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-blue-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">Stay Updated</h2>
            <div className="max-w-md mx-auto">
              <form className="flex flex-col space-y-4">
                <Input type="email" placeholder="Enter your email" className="bg-white" />
                <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white">Subscribe</Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {currentYear} Brewdash. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-blue-200">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-center text-blue-800">{title}</h3>
      <p className="text-blue-600 text-center">{description}</p>
    </div>
  );
}