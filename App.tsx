import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Apple, Utensils, Building2, ArrowRight, Heart, Clock, MapPin, Camera, Sparkles, CheckCircle2, Truck, HandHeart } from 'lucide-react';


function Navbar() {
  return (
    <nav className="flex items-center justify-between mb-16 bg-gray-800/30 p-4 rounded-2xl backdrop-blur-sm">
      <Link to="/" className="flex items-center space-x-2 hover:text-blue-400 transition-colors">
        <Apple className="w-8 h-8" />
        <span className="text-xl font-semibold">FoodShare</span>
      </Link>
      <div className="flex space-x-6">
        <Link to="/" className="hover:text-blue-400 transition-colors font-medium">Home</Link>
        <Link to="/donate" className="hover:text-blue-400 transition-colors font-medium">Donate</Link>
        <Link to="/receive" className="hover:text-blue-400 transition-colors font-medium">Receive</Link>
      </div>
    </nav>
  );
}

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="max-w-4xl mx-auto text-center mb-24">
        <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-200">
          Share Food, Share Love
        </h1>
        <p className="text-xl text-gray-300 mb-12 leading-relaxed">
          Join our mission to create a world where no food goes to waste and every plate tells a story of compassion
        </p>
        <div className="flex justify-center gap-6">
          <button 
            onClick={() => navigate('/donate')}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-full flex items-center space-x-2 transition-all transform hover:scale-105 shadow-lg"
          >
            <Building2 className="w-5 h-5" />
            <span>Share Your Surplus</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <button 
            onClick={() => navigate('/receive')}
            className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center space-x-2 transition-all transform hover:scale-105 shadow-lg border border-gray-700"
          >
            <Utensils className="w-5 h-5" />
            <span>Find Food</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      

      {/* How It Works Section */}
      <div className="max-w-5xl mx-auto mb-24">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          How FoodShare Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900/80 p-8 rounded-2xl backdrop-blur-sm transform hover:scale-105 transition-all border border-gray-800">
            <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-6 mx-auto">
              <CheckCircle2 className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center text-blue-300">List Surplus Food</h3>
            <p className="text-gray-400 text-center">Organizations list their surplus food with details like quantity, type, and best-before date</p>
          </div>
          <div className="bg-gray-900/80 p-8 rounded-2xl backdrop-blur-sm transform hover:scale-105 transition-all border border-gray-800">
            <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Truck className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center text-purple-300">Quick Distribution</h3>
            <p className="text-gray-400 text-center">We connect donors with nearby recipients for efficient and timely food distribution</p>
          </div>
          <div className="bg-gray-900/80 p-8 rounded-2xl backdrop-blur-sm transform hover:scale-105 transition-all border border-gray-800">
            <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-6 mx-auto">
              <HandHeart className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center text-blue-300">Community Impact</h3>
            <p className="text-gray-400 text-center">Food reaches those in need while reducing waste and strengthening community bonds</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-24">
        <div className="bg-gray-900/80 p-8 rounded-2xl backdrop-blur-sm transform hover:scale-105 transition-all border border-gray-800">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Sparkles className="w-5 h-5 mr-2 text-blue-400" />
            Our Vision
          </h3>
          <p className="text-gray-400">Building a sustainable future where surplus food finds its way to those who need it most</p>
        </div>
        <div className="bg-gray-900/80 p-8 rounded-2xl backdrop-blur-sm transform hover:scale-105 transition-all border border-gray-800">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Heart className="w-5 h-5 mr-2 text-purple-400" />
            Our Mission
          </h3>
          <p className="text-gray-400">Connecting communities through food sharing, reducing waste while spreading joy</p>
        </div>
        <div className="bg-gray-900/80 p-8 rounded-2xl backdrop-blur-sm transform hover:scale-105 transition-all border border-gray-800">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Utensils className="w-5 h-5 mr-2 text-blue-400" />
            Our Impact
          </h3>
          <p className="text-gray-400">Creating lasting change by transforming food surplus into shared community resources</p>
        </div>
      </div>

      <div className="bg-gray-900/80 rounded-3xl p-12 mb-24 backdrop-blur-sm border border-gray-800">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="transform hover:scale-105 transition-all">
            <h4 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Zero Waste</h4>
            <p className="text-gray-400">Eliminating food waste through smart distribution</p>
          </div>
          <div className="transform hover:scale-105 transition-all">
            <h4 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">Community First</h4>
            <p className="text-gray-400">Building stronger communities through food sharing</p>
          </div>
          <div className="transform hover:scale-105 transition-all">
            <h4 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Sustainable Future</h4>
            <p className="text-gray-400">Creating lasting environmental impact</p>
          </div>
        </div>
      </div>
    </>
  );
}

function DonateFood() {
  return (
    
    <div className="max-w-2xl mx-auto bg-gradient-to-br from-gray-800/50 to-blue-900/30 rounded-2xl backdrop-blur-sm p-8 shadow-xl">
      <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
        Share Your Surplus Food
      </h2>
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2 text-blue-300">Organization Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            placeholder="Enter your organization name"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2 text-blue-300">Food Description</label>
          <textarea
            className="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            rows={4}
            placeholder="Describe the food items available (type, quantity, etc.)"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-blue-300">
              <Clock className="w-4 h-4 inline mr-2" />
              Best Before
            </label>
            <input
              type="datetime-local"
              className="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2 text-blue-300">
              <MapPin className="w-4 h-4 inline mr-2" />
              Pickup Location
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              placeholder="Enter pickup address"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-blue-300">
            <Camera className="w-4 h-4 inline mr-2" />
            Food Images
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-600 border-dashed rounded-lg hover:border-blue-500 transition-colors">
            <div className="space-y-1 text-center">
              <Camera className="mx-auto h-12 w-12 text-gray-400" />
              <div className="flex text-sm text-gray-400">
                <label className="relative cursor-pointer rounded-md font-medium text-blue-500 hover:text-blue-400">
                  <span>Upload images</span>
                  <input type="file" className="sr-only" multiple accept="image/*" />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-400">PNG, JPG up to 10MB</p>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-full flex items-center justify-center space-x-2 transition-all transform hover:scale-105 shadow-lg"
        >
          <span>Share Your Food</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
}


function ReceiveFood() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
        Available Food Donations
      </h2>
      
      <div className="grid gap-6">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-gradient-to-br from-gray-800/50 to-blue-900/30 rounded-xl p-6 backdrop-blur-sm transform hover:scale-105 transition-all shadow-lg">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-300">Fresh Produce and Bread</h3>
                <p className="text-gray-400 mb-4">
                  Various fresh vegetables, fruits, and day-old bread available for immediate pickup.
                </p>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1 text-blue-400" />
                    <span>Best before: Today 8PM</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1 text-blue-400" />
                    <span>2.5 miles away</span>
                  </div>
                  <div className="flex items-center">
                    <Building2 className="w-4 h-4 mr-1 text-blue-400" />
                    <span>Local Grocery Store</span>
                  </div>
                </div>
              </div>
              
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=200&h=200"
                alt="Food donation"
                className="w-32 h-32 rounded-lg object-cover shadow-lg"
              />
            </div>
            
            <div className="mt-6 flex gap-4">
              <button className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-full flex items-center justify-center space-x-2 transition-all transform hover:scale-105 shadow-lg">
                <span>Request Pickup</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-full transition-all transform hover:scale-105 shadow-lg border border-gray-600">
                Contact Donor
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="text-center text-gray-400 mt-24">
      <div className="flex items-center justify-center space-x-2 mb-4">
        <Heart className="w-4 h-4 text-red-500 animate-pulse" />
        <p>Made by C^3</p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 py-16">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/donate" element={<DonateFood />} />
            <Route path="/receive" element={<ReceiveFood />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;