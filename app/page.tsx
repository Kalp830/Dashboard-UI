'use client'

import React from 'react'
import { useState } from 'react'
import { 
  FiGrid, 
  FiUsers, 
  FiTruck, 
  FiCheckSquare, 
  FiFileText,
  FiClock,
  FiMenu,
  FiChevronDown,
  FiCheck
} from 'react-icons/fi'
import { GiSteeringWheel } from 'react-icons/gi'
import { AiFillCar } from 'react-icons/ai'
import InterventionsGauge from './components/InterventionsGauge'

// Mock data for the driver rankings
const worstPerformers = [
  { id: 1, name: 'Adam Markham', score: 30, image: './images/men-1.png' },
  { id: 2, name: 'Tom Buck', score: 38, image: './images/men-2.png' },
  { id: 3, name: 'Temba Bavuma', score: 45, image: './images/men-1.png' },
  { id: 4, name: 'Cory Anderson', score: 51, image: './images/men-2.png' }
]

const bestPerformers = [
  { id: 1, name: 'Steve Smith', score: 98, image: './images/men-2.png' },
  { id: 2, name: 'David Warner', score: 98, image: './images/men-1.png' },
  { id: 3, name: 'Glen Philips', score: 96, image: './images/men-2.png' },
  { id: 4, name: 'Devon Conway', score: 94, image: './images/men-1.png' },
  { id: 5, name: 'Richie Brandon', score: 92, image: './images/men-2.png' }
]

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [viewType, setViewType] = useState('month') // 'month' or 'week'

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  // Calculate the circumference and offset for half circle
  const radius = 88
  const circumference = Math.PI * radius
  const offset = circumference * (1 - 0.83)

  return (
    <div className="flex h-screen bg-safely-light">
      {/* Sidebar */}
      <div className={`bg-safely-dark text-safely-text transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-20'} min-h-screen`}>
        <div className="p-6">
          <img src="/safely-logo.png" alt="Safely" className="h-8" />
        </div>
        <nav className="mt-8">
          <ul className="space-y-2">
            <li className="mx-4">
              <a href="#" className="flex items-center px-4 py-3 text-safely-green bg-safely-green/10 rounded-lg">
                <FiGrid className="w-5 h-5" />
                <span className={`ml-3 ${!sidebarOpen && 'hidden'}`}>Dashboard</span>
              </a>
            </li>
            <li className="mx-4">
              <a href="#" className="flex items-center px-4 py-3 text-safely-text hover:bg-safely-green/10 rounded-lg">
                <FiUsers className="w-5 h-5" />
                <span className={`ml-3 ${!sidebarOpen && 'hidden'}`}>User Management</span>
              </a>
            </li>
            <li className="mx-4">
              <a href="#" className="flex items-center px-4 py-3 text-safely-text hover:bg-safely-green/10 rounded-lg">
                <FiTruck className="w-5 h-5" />
                <span className={`ml-3 ${!sidebarOpen && 'hidden'}`}>Vehicle Management</span>
              </a>
            </li>
            <li className="mx-4">
              <a href="#" className="flex items-center px-4 py-3 text-safely-text hover:bg-safely-green/10 rounded-lg">
                <FiClock className="w-5 h-5" />
                <span className={`ml-3 ${!sidebarOpen && 'hidden'}`}>Task Management</span>
              </a>
            </li>
            <li className="mx-4">
              <a href="#" className="flex items-center px-4 py-3 text-safely-text hover:bg-safely-green/10 rounded-lg">
                <FiCheckSquare className="w-5 h-5" />
                <span className={`ml-3 ${!sidebarOpen && 'hidden'}`}>Checklist</span>
              </a>
            </li>
            <li className="mx-4">
              <a href="#" className="flex items-center px-4 py-3 text-safely-text hover:bg-safely-green/10 rounded-lg">
                <FiFileText className="w-5 h-5" />
                <span className={`ml-3 ${!sidebarOpen && 'hidden'}`}>Document Centre</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-safely-white p-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <img src="/avatar.svg" alt="User" className="w-8 h-8 rounded-full" />
              <button className="px-4 py-2 text-safely-gray hover:bg-safely-light rounded-lg">Export</button>
            </div>
            <div className="flex items-center space-x-2">
              <img src="/avatar.svg" alt="User" className="w-8 h-8 rounded-full" />
              <span>Aaron Elipan</span>
              <FiChevronDown className="w-4 h-4 text-safely-gray" />
            </div>
          </div>
        </header>

        <main className="p-6">
          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-safely-white p-6 rounded-xl flex items-center justify-between">
              <div>
                <p className="text-safely-gray text-sm">Total Drivers</p>
                <p className="text-2xl font-semibold">245</p>
              </div>
              <div className="p-3 flex">
                <GiSteeringWheel className="w-10 h-6 text-safely-green" />
              </div>
            </div>

            <div className="bg-safely-white p-6 rounded-xl flex items-center justify-between">
              <div>
                <p className="text-safely-gray text-sm">Total Vehicles</p>
                <p className="text-2xl font-semibold">245</p>
              </div>
              <div className="p-3 flex">
                <AiFillCar className="w-12 h-6 text-safely-green" />
              </div>
            </div>

            <div className="bg-safely-white p-6 rounded-xl flex items-center justify-between">
              <div>
                <p className="text-safely-gray text-sm">Total Managers</p>
                <p className="text-2xl font-semibold">245</p>
              </div>
              <div className="p-3 flex">
                <FiUsers className="w-10 h-6 text-safely-green" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1  gap-6 mb-6">
          <div className="bg-safely-white px-6 py-6  rounded-xl">
          <div className="flex items-center justify-between ">
                <div className="flex items-center space-x-3">
                  <img src="/avatar.svg" alt="User" className="w-8 h-8 rounded-full" />
                  <span>Mr. Adam Markham</span>
                </div>
                <div className="flex items-center space-x-3">
                  <button 
                    onClick={() => setViewType('month')}
                    className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
                      viewType === 'month' 
                        ? 'bg-safely-green/10 text-safely-green' 
                        : 'text-safely-gray hover:bg-safely-light'
                    }`}
                  >
                    <div className={`w-4 h-4 border rounded ${
                      viewType === 'month' 
                        ? 'border-safely-green bg-safely-green text-white' 
                        : 'border-safely-gray'
                    } flex items-center justify-center`}>
                      {viewType === 'month' && <FiCheck className="w-3 h-3" />}
                    </div>
                    <span>By Month</span>
                  </button>
                  <button 
                    onClick={() => setViewType('week')}
                    className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
                      viewType === 'week' 
                        ? 'bg-safely-green/10 text-safely-green' 
                        : 'text-safely-gray hover:bg-safely-light'
                    }`}
                  >
                    <div className={`w-4 h-4 border rounded ${
                      viewType === 'week' 
                        ? 'border-safely-green bg-safely-green text-white' 
                        : 'border-safely-gray'
                    } flex items-center justify-center`}>
                      {viewType === 'week' && <FiCheck className="w-3 h-3" />}
                    </div>
                    <span>By Week</span>
                  </button>
                  <select className="px-4 py-2 bg-safely-light rounded-lg">
                    <option>November</option>
                  </select>
                  <select className="px-4 py-2 bg-safely-light rounded-lg">
                    <option>2023</option>
                  </select>
                </div>
              </div>
              </div>
               </div>

       

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-safely-white p-6 lg:grid-cols-2 rounded-xl">
              <div className="grid grid-cols-2">
                <div className="relative">
                  <h2 className="text-safely-dark font-semibold">Driver Score</h2>
                  <div className="flex items-center justify-center">
                    <div className="relative w-48 h-48">
                      <svg className="w-full h-full transform -rotate-120">
                        <circle
                          cx="96"
                          cy="96"
                          r="88"
                          fill="none"
                          stroke="#E8F5E9"
                          strokeWidth="16"
                        />
                        <circle
                          cx="96"
                          cy="96"
                          r="88"
                          fill="none"
                          stroke="#7EBF50"
                          strokeWidth="16"
                          strokeDasharray={`${2 * Math.PI * 88 * 0.83} ${2 * Math.PI * 88 * (1 - 0.83)}`}
                          strokeDashoffset="0"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-4xl font-bold">83%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-safely-white p-6 rounded-xl">
              <div className="grid grid-cols-1 gap-6">
                <div className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-safely-dark font-semibold">Speeding</h2>
                    <span className="text-safely-gray">% change</span>
                  </div>
                  <div className="h-48 relative">
                    <div className="absolute right-0 top-4 text-safely-dark text-2xl font-semibold flex items-center">
                      13<span className="text-base ml-0.5">%</span>
                      <p className="text-sm font-normal text-safely-gray ml-2">Speeding</p>
                    </div>
                    <svg className="w-full h-full" viewBox="0 0 300 200" preserveAspectRatio="none">
                      {/* Y-axis labels */}
                      <text x="10" y="40" className="text-xs text-safely-gray">20%</text>
                      <text x="10" y="80" className="text-xs text-safely-gray">15%</text>
                      <text x="10" y="120" className="text-xs text-safely-gray">10%</text>
                      <text x="10" y="160" className="text-xs text-safely-gray">5%</text>
                      <text x="10" y="190" className="text-xs text-safely-gray">0%</text>

                      {/* X-axis labels */}
                      <text x="40" y="195" className="text-xs text-safely-gray">Week 1</text>
                      <text x="90" y="195" className="text-xs text-safely-gray">Week 2</text>
                      <text x="140" y="195" className="text-xs text-safely-gray">Week 3</text>
                      <text x="190" y="195" className="text-xs text-safely-gray">Week 4</text>
                      <text x="240" y="195" className="text-xs text-safely-gray">Week 5</text>
                      <text x="290" y="195" className="text-xs text-safely-gray">Week 6</text>

                      {/* Vertical dotted line at week 4 */}
                      <line 
                        x1="190" 
                        y1="40" 
                        x2="190" 
                        y2="180" 
                        stroke="#E8F5E9" 
                        strokeDasharray="4" 
                      />

                      {/* The curved line */}
                      <path
                        d="M40,120 C60,110 80,140 100,130 S140,80 190,60 S240,90 290,140"
                        fill="none"
                        stroke="#7EBF50"
                        strokeWidth="2"
                      />

                      {/* The highlighted point at week 4 */}
                      <circle
                        cx="190"
                        cy="60"
                        r="4"
                        fill="#7EBF50"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          

          {/* Checklist Compliance and Interventions Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Interventions */}
            <div className="bg-safely-white p-6 rounded-xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold">Interventions</h2>
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <button className="px-4 py-2 bg-white border rounded-lg flex items-center space-x-2">
                      <span>Non Compliant</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 9l6 6 6-6"/>
                      </svg>
                    </button>
                  </div>
                  <div className="relative">
                    <button className="px-4 py-2 bg-white border rounded-lg flex items-center space-x-2">
                      <span>Filter</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
                      </svg>
                    </button>
                  </div>
                  <button className="p-2 bg-white border rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="mb-4 flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-safely-green"></div>
                  <span className="text-sm text-safely-gray">Phone Calls</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-safely-green"></div>
                  <span className="text-sm text-safely-gray">Emails Sent</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-safely-green"></div>
                  <span className="text-sm text-safely-gray">Messages</span>
                </div>
              </div>

              <div className="flex">
                <div className="w-3/4 relative">
                  <div className="relative h-40 flex items-center justify-center">
                    <svg width="100%" height="100%" viewBox="0 0 300 150" preserveAspectRatio="xMidYMid meet">
                      {/* Background semi-circle */}
                      <path
                        d="M25,150 A125,125 0 0,1 275,150"
                        fill="none"
                        stroke="#E8F5E9"
                        strokeWidth="30"
                        strokeLinecap="round"
                      />
                      {/* Active portion */}
                      <path
                        d="M25,150 A125,125 0 0,1 125,40"
                        fill="none"
                        stroke="#7EBF50"
                        strokeWidth="30"
                        strokeLinecap="round"
                      />
                      {/* 6 times tooltip */}
                      <g transform="translate(125, 40)">
                        <rect x="-30" y="-35" width="60" height="28" rx="4" fill="#1A1D1F"/>
                        <text x="0" y="-16" textAnchor="middle" fill="white" fontSize="12" fontWeight="600">6 times</text>
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="w-1/4">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-4 h-4 mr-2 flex items-center justify-center border border-safely-gray bg-safely-green rounded">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-sm">All</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 mr-2 border border-safely-gray rounded"></div>
                      <span className="text-sm">Manager</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 mr-2 border border-safely-gray rounded"></div>
                      <span className="text-sm">Safety Champion</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 mr-2 border border-safely-gray rounded"></div>
                      <span className="text-sm">System Generated</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              <div className="bg-safely-white p-6 rounded-xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold">Checklist Compliance</h2>
              </div>
              <div className="relative">
                <div className="flex items-center justify-center">
                  <div className="relative w-full max-w-sm h-50">
                    <svg className="w-full h-full" viewBox="0 0 240 140">
                      {/* Background arc */}
                      <path
                        d="M30 100 A70 70 0 0 1 210 100"
                        fill="none"
                        stroke="#E5E7EB"
                        strokeWidth="18"
                        strokeLinecap="round"
                      />
                      {/* Progress arc */}
                      <path
                        d="M30 100 A70 70 0 0 1 210 100"
                        fill="none"
                        stroke="#7EBF50"
                        strokeWidth="18"
                        strokeLinecap="round"
                        strokeDasharray="220"
                       
                        transform="rotate(350 120 100)"
                      />
                      {/* Scale markers */}
                      <text x="28" y="120" fontSize="12" fontWeight="400" fill="#94A3B8">0%</text>
                      <text x="202" y="120" fontSize="12" fontWeight="400" fill="#94A3B8">100%</text>
                      {/* Percentage text */}
                      <text
                        x="120"
                        y="85"
                        textAnchor="middle"
                        fontSize="36"
                        fontWeight="700"
                        fill="#1E293B"
                      >
                        75
                        <tspan fontSize="24" dy="-10">%</tspan>
                      </text>
                      {/* Green dot at the end of progress */}
                      <circle
                        cx="190"
                        cy="42"
                        r="15"
                        fill="#7EBF50"
                        stroke="#fff"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            


          </div>

             {/* Drivers Ranking Section */}
          <div className="bg-safely-white p-6 rounded-xl mb-6">
            <div className="mb-6">
              <div className="flex mb-6">
                <button className="bg-safely-dark text-white py-3 px-6 rounded-lg">
                  Drivers Ranking
                </button>
                <button className="text-safely-gray py-3 px-6 rounded-lg border">
                  Managers Ranking
                </button>
                <div className="ml-auto">
                  <div className="relative">
                    <button className="flex items-center space-x-2 border rounded-lg px-4 py-2 text-safely-gray">
                      <span>Harsh Cornering</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 9l6 6 6-6"/>
                      </svg>
                    </button>
                    <div className="absolute right-0 top-12 bg-white rounded-lg shadow-lg border w-56 z-10">
                      <div className="p-2 hover:bg-safely-light cursor-pointer">
                        Speeding
                      </div>
                      <div className="p-2 hover:bg-safely-light cursor-pointer bg-safely-light">
                        Harsh Cornering
                      </div>
                      <div className="p-2 hover:bg-safely-light cursor-pointer">
                        Rapid Acceleration
                      </div>
                      <div className="p-2 hover:bg-safely-light cursor-pointer">
                        Driver Score
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Worst Performers */}
              <div className="mb-8">
                <h3 className="text-safely-gray mb-4">Worst Performer</h3>
                <div className="flex space-x-6">
                  {worstPerformers.map((driver) => (
                    <div key={driver.id} className="flex-1 bg-white rounded-lg shadow-sm overflow-hidden">
                      <div className="flex p-3">
                        <div className="w-16 h-18 overflow-hidden rounded-lg mr-3">
                          <img src={driver.image} alt={driver.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col justify-center">
                          <div className="flex items-baseline">
                            <span className="text-3xl font-bold">{driver.score}</span>
                            <span className="text-safely-gray text-sm ml-1">/100</span>
                          </div>
                          <span className="text-safely-gray text-sm">{driver.name}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Best Performers */}
              <div>
                <h3 className="text-safely-gray mb-4">Best Performer</h3>
                <div className="flex space-x-6">
                  {bestPerformers.map((driver) => (
                    <div key={driver.id} className="flex-1 bg-white rounded-lg shadow-sm overflow-hidden">
                      <div className="flex p-3">
                        <div className="w-16 h-18 overflow-hidden rounded-lg mr-3">
                          <img src={driver.image} alt={driver.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col justify-center">
                          <div className="flex items-baseline">
                            <span className="text-3xl font-bold text-safely-green">{driver.score}</span>
                            <span className="text-safely-gray text-sm ml-1">/100</span>
                          </div>
                          <span className="text-safely-gray text-sm">{driver.name}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pagination */}
              <div className="flex justify-end mt-4">
                <button className="w-8 h-8 flex items-center justify-center rounded-md border">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-md bg-safely-green text-white ml-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

      
        </main>
      </div>
    </div>
  )
} 