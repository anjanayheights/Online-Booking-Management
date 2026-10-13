{/* Inventory Stats Banner */}
<div className="bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-6 text-white my-8 grid grid-cols-1 md:grid-cols-2 gap-6 shadow-xl">
  <div className="flex items-center space-x-4 border-b md:border-b-0 md:border-r border-red-400 pb-4 md:pb-0">
    <span className="text-4xl">🇮🇳</span>
    <div>
      <h3 className="text-2xl font-black">8,00,000+ Indian Properties</h3>
      <p className="text-sm text-red-100">Direct Owner Contact • Zero Brokerage</p>
    </div>
  </div>
  <div className="flex items-center space-x-4">
    <span className="text-4xl">🌐</span>
    <div>
      <h3 className="text-2xl font-black">4,00,000+ Western & Global Properties</h3>
      <p className="text-sm text-red-100">Top-Searched US, UK, Europe & UAE Properties</p>
    </div>
  </div>
</div>

{/* 25% Cheaper NoBroker Subscription Plans & Daily Passes */}
<div className="my-12">
  <div className="text-center mb-8">
    <span className="bg-red-100 text-red-600 font-bold text-xs uppercase px-3 py-1 rounded-full">
      🔥 25% Cheaper Than Standard NoBroker Plans
    </span>
    <h2 className="text-3xl font-extrabold mt-2">Anjanay Heights Owner & Buyer Passes</h2>
    <p className="text-neutral-500 text-sm mt-1">Get instant owner details with our flexible daily & monthly plans</p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
    {/* ₹99 Indian Pass */}
    <div className="border-2 border-red-500 bg-white dark:bg-neutral-900 rounded-2xl p-6 shadow-lg relative flex flex-col justify-between">
      <span className="absolute -top-3 right-4 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Most Popular</span>
      <div>
        <h3 className="font-bold text-lg">Indian Daily Pass</h3>
        <p className="text-xs text-neutral-500 mt-1">Unlock all 8 Lakh+ Indian owner listings for 24 hrs</p>
        <div className="my-4">
          <span className="text-3xl font-black">₹99</span>
          <span className="text-xs text-neutral-400"> / day</span>
        </div>
        <ul className="text-xs space-y-2 text-neutral-600 dark:text-neutral-300 my-4">
          <li>✓ Direct Owner Contact Numbers</li>
          <li>✓ Zero Brokerage Guaranteed</li>
          <li>✓ Instant WhatsApp Connect</li>
        </ul>
      </div>
      <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 rounded-xl text-xs">
        Get ₹99 Pass
      </button>
    </div>

    {/* $2 International Pass */}
    <div className="border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 rounded-2xl p-6 shadow-lg flex flex-col justify-between">
      <div>
        <h3 className="font-bold text-lg">Global Daily Pass</h3>
        <p className="text-xs text-neutral-500 mt-1">Access 4 Lakh+ Western & International listings</p>
        <div className="my-4">
          <span className="text-3xl font-black">$2</span>
          <span className="text-xs text-neutral-400"> / day</span>
        </div>
        <ul className="text-xs space-y-2 text-neutral-600 dark:text-neutral-300 my-4">
          <li>✓ Top US, UK, UAE & European Listings</li>
          <li>✓ Verified Landlords & Agents</li>
          <li>✓ Multi-Currency Support</li>
        </ul>
      </div>
      <button className="w-full bg-neutral-900 hover:bg-black text-white font-bold py-2.5 rounded-xl text-xs">
        Get $2 Pass
      </button>
    </div>

    {/* 25% Cheaper Freedom Plan */}
    <div className="border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 rounded-2xl p-6 shadow-lg flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">Full Freedom Plan</h3>
          <span className="text-[10px] bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded">Save 25%</span>
        </div>
        <p className="text-xs text-neutral-500 mt-1">Unlimited contacts for 45 Days</p>
        <div className="my-4">
          <span className="text-3xl font-black">₹1,499</span>
          <span className="line-through text-xs text-neutral-400 ml-2">₹1,999</span>
        </div>
        <ul className="text-xs space-y-2 text-neutral-600 dark:text-neutral-300 my-4">
          <li>✓ Unlimited Owner Contacts</li>
          <li>✓ Relationship Manager Assistance</li>
          <li>✓ Free Rental Agreement Draft</li>
        </ul>
      </div>
      <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 rounded-xl text-xs">
        Subscribe & Save 25%
      </button>
    </div>
  </div>
</div>
