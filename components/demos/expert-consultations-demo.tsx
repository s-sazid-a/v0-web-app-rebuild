"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Star, Video, MessageSquare, Clock, Users, Award, BookOpen, ArrowLeft } from "lucide-react"

interface ExpertConsultationsDemoProps {
  isOpen: boolean
  onClose: () => void
}

const experts = [
  {
    id: 1,
    name: "Dr. Elena Reyes",
    title: "Medical Director, Nutritional Medicine",
    specialties: ["Clinical Nutrition", "Preventive Medicine", "Weight Management"],
    bio: "Board-certified physician with 15+ years focusing on integrative nutrition and metabolic health optimization.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/expert-1-dVB9c1tFdwM7vJWEro1obhwHfTpMii.jpg",
    avatarFallback: "ER",
    rating: 4.9,
    reviews: 127,
    availability: "Next Available: Tomorrow, 2:30 PM",
    education: "Stanford Medical School | Harvard Fellowship",
    expertise: "Specializes in nutrition protocols for autoimmune conditions and hormonal optimization",
    consultationFee: "$185",
    backgroundColor: "from-blue-500/10 to-purple-500/10"
  },
  {
    id: 2,
    name: "Lucas Zhang, MS, RD",
    title: "Lead Dietitian, Performance Nutrition",
    specialties: ["Sports Nutrition", "Meal Planning", "Supplement Optimization"],
    bio: "Certified sports nutritionist who has worked with Olympic athletes and professional sports teams.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/expert-2-VMXsbFG6DgITv7w6yzi65ZTQvajHFS.jpg",
    avatarFallback: "LZ",
    rating: 4.8,
    reviews: 98,
    availability: "Next Available: Today, 5:15 PM",
    education: "Cornell University | IOC Sports Nutrition Certification",
    expertise: "Performance optimization for endurance athletes and strength training nutrition protocols",
    consultationFee: "$125",
    backgroundColor: "from-emerald-500/10 to-cyan-500/10"
  },
  {
    id: 3,
    name: "Dr. Maya Johnson",
    title: "Chief Medical Officer, Metabolic Health",
    specialties: ["Functional Medicine", "Hormonal Health", "Nutrigenomics"],
    bio: "Leading researcher in personalized medicine based on genetic profiles.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/expert-3-WS3LtKpfVfQBHQOtR04Rd8P35tS3Tq.jpg",
    avatarFallback: "MJ",
    rating: 4.95,
    reviews: 156,
    availability: "Next Available: Friday, 10:00 AM",
    education: "Johns Hopkins Medical School | Mayo Clinic Fellowship",
    expertise: "Specialized in treating complex metabolic disorders through personalized nutrition",
    consultationFee: "$210",
    backgroundColor: "from-amber-500/10 to-pink-500/10"
  },
  {
    id: 4,
    name: "Carlos Mendez, PhD",
    title: "Director of Health Psychology",
    specialties: ["Behavioral Nutrition", "Habit Formation", "Emotional Eating"],
    bio: "Health psychologist specializing in the mind-body connection for sustainable dietary changes.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/expert-4-jFjQS8t43GDFY2f58koWBW2OCIQsOh.jpg",
    avatarFallback: "CM",
    rating: 4.7,
    reviews: 84,
    availability: "Next Available: Thursday, 1:45 PM",
    education: "UCLA Psychology | UCSF Behavioral Medicine",
    expertise: "Expert in habit change psychology and mindful eating techniques",
    consultationFee: "$150",
    backgroundColor: "from-indigo-500/10 to-purple-500/10"
  },
  {
    id: 5,
    name: "Dr. Sophia Li, PhD",
    title: "Advanced Biometric Analysis Specialist",
    specialties: ["AI Health Integration", "Longevity Medicine", "Biomarker Analysis"],
    bio: "Pioneer in AI-driven health diagnostics and personalized longevity protocols.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/expert-5-oeHc4tvAJ9WEANzBZewN63db3JBVqt.jpg",
    avatarFallback: "SL",
    rating: 4.9,
    reviews: 112,
    availability: "Next Available: Monday, 9:30 AM",
    education: "MIT Computational Biology | Stanford Longevity Institute",
    expertise: "AI-assisted metabolic optimization and longevity protocols based on personal biomarkers",
    consultationFee: "$225",
    backgroundColor: "from-violet-500/10 to-fuchsia-500/10"
  },
  {
    id: 6,
    name: "Dr. Julian Patel, MD",
    title: "Head of Integrative Medicine",
    specialties: ["Holistic Health", "Eastern Medicine Integration", "Anti-Inflammatory Nutrition"],
    bio: "Double board-certified physician bridging conventional and holistic approaches to health.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/expert-6-kSSMLbBOzCoC76cwICO3rvP9aLsibc.jpg",
    avatarFallback: "JP",
    rating: 4.85,
    reviews: 139,
    availability: "Next Available: Wednesday, 11:15 AM",
    education: "University of Pennsylvania Medical School | Fellowship in Integrative Medicine",
    expertise: "Expert in combining evidence-based Western medicine with traditional Eastern practices",
    consultationFee: "$195",
    backgroundColor: "from-cyan-500/10 to-blue-500/10"
  }
]

export function ExpertConsultationsDemo({ isOpen, onClose }: ExpertConsultationsDemoProps) {
  const [activeExpertId, setActiveExpertId] = useState<number | null>(null)
  
  const activeExpert = experts.find(expert => expert.id === activeExpertId)
  
  const handleExpertClick = (id: number) => {
    setActiveExpertId(id)
  }
  
  const handleBackClick = () => {
    setActiveExpertId(null)
  }

  const handleClose = () => {
    setActiveExpertId(null)
    onClose()
  }
  
  const renderExpertsGrid = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[60vh] overflow-y-auto pr-2">
      {experts.map((expert, index) => (
        <motion.div 
          key={expert.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 * index }}
        >
          <Card 
            className={`bg-gradient-to-br ${expert.backgroundColor} border-white/10 hover:border-white/20 hover:shadow-xl transition-all duration-300 cursor-pointer`}
            onClick={() => handleExpertClick(expert.id)}
          >
            <CardHeader className="pb-2 flex flex-row items-start gap-3">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/30 shadow-lg relative flex-shrink-0">
                <div className="w-full h-full bg-gradient-to-br from-[#6E00FF]/40 to-[#00D8FF]/40 flex items-center justify-center text-lg font-bold absolute top-0 left-0 z-0 text-white">
                  {expert.avatarFallback}
                </div>
                <img 
                  src={expert.image} 
                  alt={expert.name} 
                  className="w-full h-full object-cover relative z-10"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.onerror = null
                    target.style.display = "none"
                  }}
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <CardTitle className="text-base text-white truncate">{expert.name}</CardTitle>
                <p className="text-xs text-gray-400 truncate">{expert.title}</p>
                <div className="flex items-center mt-1">
                  <Star className="w-3 h-3 text-yellow-400 mr-1 fill-yellow-400" />
                  <span className="text-xs text-white">{expert.rating}</span>
                  <span className="text-xs text-gray-400 ml-1">({expert.reviews})</span>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="pb-2">
              <p className="text-xs text-gray-300 line-clamp-2 mb-2">{expert.bio}</p>
              <div className="flex flex-wrap gap-1">
                {expert.specialties.slice(0, 2).map((specialty, idx) => (
                  <Badge key={idx} variant="outline" className="bg-white/5 text-xs border-white/10 text-gray-300">{specialty}</Badge>
                ))}
              </div>
            </CardContent>
            
            <CardFooter className="pt-0">
              <p className="text-xs flex items-center text-gray-400">
                <Calendar className="w-3 h-3 mr-1" />
                {expert.availability}
              </p>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  )
  
  const renderExpertDetail = () => {
    if (!activeExpert) return null
    
    return (
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col md:flex-row gap-6 max-h-[60vh] overflow-y-auto"
      >
        <div className="md:w-1/3">
          <Card className="bg-gradient-to-br from-[#6E00FF]/10 to-[#00D8FF]/10 border-white/10 shadow-lg">
            <CardHeader className="flex flex-col items-center text-center pb-2">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/30 shadow-lg mb-4 relative">
                <div className="w-full h-full bg-gradient-to-br from-[#6E00FF]/40 to-[#00D8FF]/40 flex items-center justify-center text-2xl font-bold absolute top-0 left-0 z-0 text-white">
                  {activeExpert.avatarFallback}
                </div>
                <img 
                  src={activeExpert.image} 
                  alt={activeExpert.name} 
                  className="w-full h-full object-cover relative z-10"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.onerror = null
                    target.style.display = "none"
                  }}
                />
              </div>
              <CardTitle className="text-white">{activeExpert.name}</CardTitle>
              <p className="text-sm text-gray-400">{activeExpert.title}</p>
              <div className="flex items-center mt-2">
                <Star className="w-4 h-4 text-yellow-400 mr-1 fill-yellow-400" />
                <span className="text-sm text-white">{activeExpert.rating}</span>
                <span className="text-xs text-gray-400 ml-1">({activeExpert.reviews} reviews)</span>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-white mb-2">Credentials</h4>
                <p className="text-xs text-gray-400">{activeExpert.education}</p>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-white mb-2">Availability</h4>
                <p className="text-xs text-gray-400 flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  {activeExpert.availability}
                </p>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-white mb-2">Consultation Fee</h4>
                <p className="text-sm font-bold text-white">{activeExpert.consultationFee} <span className="text-xs font-normal text-gray-400">per session</span></p>
              </div>
              
              <div className="pt-2 flex flex-col gap-2">
                <Button className="w-full bg-gradient-to-r from-[#6E00FF] to-[#00D8FF] text-white">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Consultation
                </Button>
                <Button variant="outline" className="w-full border-white/10 text-white hover:bg-white/10">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="md:w-2/3">
          <Card className="bg-white/5 border-white/10 shadow-lg h-full">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-white">About {activeExpert.name}</CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold mb-2 flex items-center text-white">
                  <Award className="w-4 h-4 mr-2 text-[#6E00FF]" />
                  Professional Experience
                </h4>
                <p className="text-sm text-gray-300">{activeExpert.bio}</p>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold mb-2 flex items-center text-white">
                  <BookOpen className="w-4 h-4 mr-2 text-[#6E00FF]" />
                  Areas of Expertise
                </h4>
                <p className="text-sm text-gray-300">{activeExpert.expertise}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {activeExpert.specialties.map((specialty, index) => (
                    <Badge key={index} variant="outline" className="bg-white/5 border-white/10 text-gray-300">{specialty}</Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold mb-2 flex items-center text-white">
                  <Users className="w-4 h-4 mr-2 text-[#6E00FF]" />
                  Consultation Types
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
                  <Card className="bg-white/5 border-white/10">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#6E00FF]/20 flex items-center justify-center">
                          <Video className="w-5 h-5 text-[#6E00FF]" />
                        </div>
                        <div>
                          <h5 className="font-medium text-white">Video Consultation</h5>
                          <p className="text-xs text-gray-400">45-minute session</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-white/5 border-white/10">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#00D8FF]/20 flex items-center justify-center">
                          <MessageSquare className="w-5 h-5 text-[#00D8FF]" />
                        </div>
                        <div>
                          <h5 className="font-medium text-white">Chat Consultation</h5>
                          <p className="text-xs text-gray-400">Ongoing support</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
            
            <CardFooter className="pt-0">
              <Button variant="ghost" size="sm" className="gap-2 text-gray-400 hover:text-white" onClick={handleBackClick}>
                <ArrowLeft className="w-4 h-4" />
                Back to all experts
              </Button>
            </CardFooter>
          </Card>
        </div>
      </motion.div>
    )
  }
  
  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-auto bg-[#0A0E17]/95 backdrop-blur-xl border-white/10">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-2xl font-bold">
            <span className="gradient-text flex items-center gap-2">
              <Users className="w-6 h-6" />
              Expert Consultations
            </span>
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            Connect with certified nutritionists, doctors, and health coaches for personalized guidance and support
          </DialogDescription>
        </DialogHeader>
        
        {activeExpertId ? renderExpertDetail() : renderExpertsGrid()}
      </DialogContent>
    </Dialog>
  )
}
