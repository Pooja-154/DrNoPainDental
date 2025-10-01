import React, { useState } from 'react';
import { 
  Search, 
  Calendar, 
  User, 
  Clock, 
  ArrowRight, 
  Heart, 
  Smile, 
  Shield, 
  Sparkles,
  ChevronRight,
  Tag,
  X,
  CheckCircle,
  Star
} from 'lucide-react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);

  const categories = [
    { name: 'All', icon: Sparkles, color: 'from-purple-500 to-pink-500' },
    { name: 'Pain-Free Dentistry', icon: Shield, color: 'from-violet-500 to-purple-500' },
    { name: 'Smile Makeovers', icon: Smile, color: 'from-pink-500 to-violet-500' },
    { name: 'Dental Myths & Tips', icon: Sparkles, color: 'from-purple-500 to-violet-500' },
    { name: 'Patient Stories', icon: Heart, color: 'from-violet-500 to-pink-500' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "How Painless Dentistry Really Works",
      excerpt: "Discover the advanced techniques and technologies that make modern dental procedures completely comfortable and anxiety-free.",
      category: "Pain-Free Dentistry",
      author: "Dr. Sarah Johnson",
      date: "January 15, 2025",
      readTime: "5 min read",
      image: "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      featured: true,
      tags: ["Painless", "Technology", "Comfort"],
      content: `
        <h2>The Revolution in Pain-Free Dental Care</h2>
        <p>Gone are the days when dental visits meant inevitable discomfort. Modern dentistry has evolved dramatically, incorporating cutting-edge technologies and refined techniques that prioritize patient comfort above all else.</p>
        
        <h3>Advanced Anesthesia Techniques</h3>
        <p>Our approach to pain management begins with topical anesthetics that numb the injection site before any needle touches your gums. We use ultra-thin needles and computer-controlled injection systems that deliver anesthetic at the perfect pressure and temperature, eliminating the sharp sensation traditionally associated with dental injections.</p>
        
        <h3>Laser Dentistry: The Future is Here</h3>
        <p>Laser technology has revolutionized many dental procedures. For soft tissue treatments, lasers can often eliminate the need for traditional cutting tools, reducing bleeding, swelling, and healing time. Many patients report feeling nothing more than a warm sensation during laser treatments.</p>
        
        <h3>Sedation Options for Every Comfort Level</h3>
        <p>We offer multiple sedation levels to match your comfort needs:</p>
        <ul>
          <li><strong>Nitrous Oxide (Laughing Gas):</strong> Provides gentle relaxation while keeping you fully conscious</li>
          <li><strong>Oral Sedation:</strong> A pill taken before your appointment for deeper relaxation</li>
          <li><strong>IV Sedation:</strong> For patients with severe anxiety, providing a sleep-like state during treatment</li>
        </ul>
        
        <h3>The Spa-Like Environment</h3>
        <p>Our clinic is designed to feel more like a luxury spa than a medical facility. From the moment you enter, you'll notice the calming colors, soft lighting, and peaceful music. Each treatment room features comfortable seating, personal entertainment systems, and aromatherapy options.</p>
        
        <h3>Technology That Cares</h3>
        <p>We use digital imaging and 3D scanning to plan treatments with precision, often reducing the time you spend in the chair. Our equipment is designed for quiet operation, eliminating the anxiety-inducing sounds of traditional dental tools.</p>
        
        <h3>Your Comfort is Our Priority</h3>
        <p>Every member of our team is trained in anxiety management and patient comfort techniques. We take the time to explain each step of your treatment, answer your questions, and ensure you feel completely at ease throughout your visit.</p>
        
        <p>Experience the difference that truly painless dentistry can make. Your oral health journey should be comfortable, stress-free, and even enjoyable.</p>
      `
    },
    {
      id: 2,
      title: "Top 5 Cosmetic Dentistry Trends in 2025",
      excerpt: "From invisible aligners to digital smile design, explore the latest innovations transforming cosmetic dentistry this year.",
      category: "Smile Makeovers",
      author: "Dr. Michael Chen",
      date: "January 12, 2025",
      readTime: "7 min read",
      image: "https://images.pexels.com/photos/6812540/pexels-photo-6812540.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      featured: true,
      tags: ["Trends", "Cosmetic", "2025"],
      content: `
        <h2>The Future of Beautiful Smiles is Here</h2>
        <p>2025 has brought exciting innovations to cosmetic dentistry, making beautiful smiles more accessible, comfortable, and natural-looking than ever before. Here are the top trends reshaping smile makeovers this year.</p>
        
        <h3>1. AI-Powered Digital Smile Design</h3>
        <p>Artificial intelligence is revolutionizing smile planning. Our advanced software analyzes your facial features, lip movement, and personal preferences to create the perfect smile design. You can see your new smile before any treatment begins, ensuring complete satisfaction with the final result.</p>
        
        <h3>2. Ultra-Thin Porcelain Veneers</h3>
        <p>The latest generation of porcelain veneers are incredibly thin (as little as 0.2mm) yet remarkably strong. These "no-prep" veneers often require minimal to no tooth reduction, preserving your natural tooth structure while delivering stunning results.</p>
        
        <h3>3. Clear Aligner Innovations</h3>
        <p>Clear aligners have evolved beyond basic teeth straightening. New materials and treatment planning software allow for more complex movements, shorter treatment times, and better comfort. Some systems now include built-in whitening technology for simultaneous teeth straightening and brightening.</p>
        
        <h3>4. Biomimetic Dentistry</h3>
        <p>This approach focuses on recreating the natural properties of teeth. New composite materials and techniques mimic the translucency, texture, and strength of natural enamel, creating restorations that are virtually indistinguishable from your original teeth.</p>
        
        <h3>5. Minimally Invasive Gum Contouring</h3>
        <p>Laser technology has made gum reshaping more precise and comfortable than ever. We can now create the perfect gum line to complement your new smile with minimal discomfort and faster healing times.</p>
        
        <h3>The Integration Advantage</h3>
        <p>The biggest trend is combining multiple treatments for comprehensive smile makeovers. By integrating teeth whitening, alignment, and restoration in a coordinated treatment plan, we can achieve more dramatic and harmonious results.</p>
        
        <h3>Personalization is Key</h3>
        <p>Every smile makeover is now completely personalized. We consider your lifestyle, personality, and individual goals to create a smile that's uniquely yours. The days of "cookie-cutter" smiles are over.</p>
        
        <p>Ready to explore what's possible for your smile? Schedule a consultation to discover how these cutting-edge techniques can transform your confidence and oral health.</p>
      `
    },
    {
      id: 3,
      title: "Root Canals Don't Have to Hurt – Here's Why",
      excerpt: "Debunking the biggest myth in dentistry with modern techniques that make root canal therapy as comfortable as a regular cleaning.",
      category: "Pain-Free Dentistry",
      author: "Dr. Emma Rodriguez",
      date: "January 10, 2025",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/3845623/pexels-photo-3845623.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      featured: false,
      tags: ["Root Canal", "Myths", "Comfort"],
      content: `
        <h2>Busting the Biggest Myth in Dentistry</h2>
        <p>If you've been avoiding a needed root canal because you're afraid it will hurt, you're not alone. Root canal therapy has an unfair reputation, but the truth is that modern root canal treatment is no more uncomfortable than getting a filling.</p>
        
        <h3>Why Root Canals Got a Bad Reputation</h3>
        <p>Decades ago, dental techniques and pain management were far less advanced. The reputation of root canals being painful stems from outdated procedures and inadequate anesthesia. Today's root canal therapy is a completely different experience.</p>
        
        <h3>Modern Root Canal Technology</h3>
        <p>We use several advanced technologies that make root canal therapy comfortable and efficient:</p>
        <ul>
          <li><strong>Digital Imaging:</strong> Precise 3D scans help us plan the exact treatment path</li>
          <li><strong>Rotary Instruments:</strong> Flexible, quiet tools that clean canals more thoroughly and quickly</li>
          <li><strong>Advanced Anesthesia:</strong> Multiple techniques ensure complete numbness throughout the procedure</li>
          <li><strong>Laser Disinfection:</strong> Eliminates bacteria more effectively than traditional methods</li>
        </ul>
        
        <h3>What Actually Happens During Treatment</h3>
        <p>The procedure itself is straightforward. After ensuring you're completely numb, we create a small access hole in the tooth, remove the infected tissue, clean and disinfect the canals, and seal the tooth. Most patients report feeling nothing during the procedure.</p>
        
        <h3>The Real Pain is Avoiding Treatment</h3>
        <p>The infection that necessitates a root canal is what causes pain, not the treatment itself. Many patients experience immediate relief after root canal therapy because we've removed the source of their discomfort.</p>
        
        <h3>Recovery is Easier Than You Think</h3>
        <p>Post-treatment discomfort is typically mild and easily managed with over-the-counter pain relievers. Most patients return to normal activities the next day. We provide detailed aftercare instructions and are always available for any questions.</p>
        
        <h3>Saving Your Natural Tooth</h3>
        <p>Root canal therapy allows you to keep your natural tooth, which is always preferable to extraction. With proper care, a tooth that has had root canal treatment can last a lifetime.</p>
        
        <h3>Our Comfort-First Approach</h3>
        <p>We understand dental anxiety is real. Our team takes extra time to ensure your comfort, explain each step, and provide sedation options if needed. Your peace of mind is just as important as your oral health.</p>
        
        <p>Don't let fear prevent you from getting the treatment you need. Modern root canal therapy is a comfortable, effective way to save your natural tooth and eliminate pain.</p>
      `
    },
    {
      id: 4,
      title: "Dental Anxiety? Here's How We Help You Relax",
      excerpt: "From spa-like environments to personalized comfort options, learn about our comprehensive approach to anxiety-free dental care.",
      category: "Patient Stories",
      author: "Dr. Sarah Johnson",
      date: "January 8, 2025",
      readTime: "4 min read",
      image: "https://images.pexels.com/photos/6812521/pexels-photo-6812521.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      featured: false,
      tags: ["Anxiety", "Relaxation", "Comfort"],
      content: `
        <h2>You're Not Alone in Your Dental Anxiety</h2>
        <p>Dental anxiety affects millions of people, and it's completely understandable. Past experiences, fear of pain, or simply the clinical environment can trigger anxiety. The good news? We've designed every aspect of our practice to help you feel calm and comfortable.</p>
        
        <h3>Creating a Spa-Like Atmosphere</h3>
        <p>From the moment you walk through our doors, you'll notice the difference. Our reception area features comfortable seating, calming colors, and soft background music. We've eliminated the clinical "hospital" feel in favor of a warm, welcoming environment that feels more like a luxury spa.</p>
        
        <h3>Personalized Comfort Options</h3>
        <p>Everyone relaxes differently, so we offer multiple comfort options:</p>
        <ul>
          <li><strong>Entertainment Systems:</strong> Watch your favorite shows or listen to music during treatment</li>
          <li><strong>Aromatherapy:</strong> Choose from calming scents like lavender or eucalyptus</li>
          <li><strong>Comfort Items:</strong> Blankets, pillows, and stress balls are available</li>
          <li><strong>Temperature Control:</strong> Each room has individual climate control for your comfort</li>
        </ul>
        
        <h3>Communication is Key</h3>
        <p>We believe informed patients are more comfortable patients. We'll explain every step of your treatment, answer all your questions, and never proceed without your consent. You're in control of your experience.</p>
        
        <h3>Sedation Options for Every Level of Anxiety</h3>
        <p>For patients with moderate to severe anxiety, we offer several sedation options:</p>
        <ul>
          <li><strong>Nitrous Oxide:</strong> Gentle relaxation that wears off quickly</li>
          <li><strong>Oral Sedation:</strong> A pill taken before your appointment for deeper relaxation</li>
          <li><strong>IV Sedation:</strong> For severe anxiety, providing a sleep-like state</li>
        </ul>
        
        <h3>Building Trust Over Time</h3>
        <p>We understand that overcoming dental anxiety is a process. We're patient, understanding, and committed to building your confidence over time. Many of our most anxious patients now look forward to their visits!</p>
        
        <h3>Success Story: Sarah's Transformation</h3>
        <p>"I hadn't been to a dentist in 10 years because of my anxiety. The team here was so understanding and patient. They started with just a consultation, then a simple cleaning with nitrous oxide. Now I actually enjoy my visits!" - Sarah M.</p>
        
        <h3>Preparation Tips for Your Visit</h3>
        <ul>
          <li>Arrive a few minutes early to settle in</li>
          <li>Bring headphones with your favorite music</li>
          <li>Practice deep breathing exercises</li>
          <li>Don't hesitate to ask questions</li>
          <li>Let us know about your concerns beforehand</li>
        </ul>
        
        <p>Your comfort and peace of mind are our top priorities. We're here to help you overcome dental anxiety and maintain excellent oral health in a stress-free environment.</p>
      `
    },
    {
      id: 5,
      title: "The Truth About Teeth Whitening: What Really Works",
      excerpt: "Separating fact from fiction in the world of teeth whitening, with expert insights on safe and effective methods.",
      category: "Dental Myths & Tips",
      author: "Dr. Michael Chen",
      date: "January 5, 2025",
      readTime: "5 min read",
      image: "https://images.pexels.com/photos/6812544/pexels-photo-6812544.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      featured: false,
      tags: ["Whitening", "Facts", "Safety"],
      content: `
        <h2>Cutting Through the Whitening Confusion</h2>
        <p>With countless whitening products and methods available, it's easy to feel overwhelmed. Let's separate the facts from the marketing hype and explore what really works for achieving a brighter, whiter smile safely.</p>
        
        <h3>Understanding Tooth Discoloration</h3>
        <p>Not all stains are created equal. There are two main types:</p>
        <ul>
          <li><strong>Extrinsic Stains:</strong> Surface stains from coffee, wine, tobacco, and certain foods</li>
          <li><strong>Intrinsic Stains:</strong> Deeper stains within the tooth structure from medications, aging, or trauma</li>
        </ul>
        <p>Understanding your stain type is crucial for choosing the most effective treatment.</p>
        
        <h3>Professional vs. Over-the-Counter Options</h3>
        <p><strong>Professional Whitening:</strong></p>
        <ul>
          <li>Higher concentration of active ingredients</li>
          <li>Custom-fitted trays for even application</li>
          <li>Professional supervision for safety</li>
          <li>Faster, more dramatic results</li>
          <li>Can address both extrinsic and some intrinsic stains</li>
        </ul>
        
        <p><strong>Over-the-Counter Products:</strong></p>
        <ul>
          <li>Lower concentration of whitening agents</li>
          <li>More affordable initial cost</li>
          <li>Convenient for maintenance</li>
          <li>Best for mild surface stains</li>
          <li>Results take longer to achieve</li>
        </ul>
        
        <h3>Debunking Common Whitening Myths</h3>
        <p><strong>Myth:</strong> "Natural" whitening methods like lemon juice and baking soda are safer.</p>
        <p><strong>Truth:</strong> These acidic substances can actually damage tooth enamel, leading to increased sensitivity and more staining over time.</p>
        
        <p><strong>Myth:</strong> Whitening damages your teeth.</p>
        <p><strong>Truth:</strong> When done properly with professional guidance, whitening is safe and doesn't harm tooth structure.</p>
        
        <p><strong>Myth:</strong> Results are permanent.</p>
        <p><strong>Truth:</strong> Whitening results gradually fade over time. Maintenance treatments help preserve your bright smile.</p>
        
        <h3>Our Professional Whitening Options</h3>
        <p><strong>In-Office Whitening:</strong> Dramatic results in just one visit using advanced light-activated systems.</p>
        <p><strong>Take-Home Trays:</strong> Custom-fitted trays with professional-strength gel for gradual whitening at your convenience.</p>
        <p><strong>Combination Approach:</strong> In-office treatment followed by take-home maintenance for optimal results.</p>
        
        <h3>Managing Sensitivity</h3>
        <p>Some people experience temporary sensitivity during whitening. We can minimize this by:</p>
        <ul>
          <li>Using desensitizing agents before and after treatment</li>
          <li>Adjusting the concentration of whitening gel</li>
          <li>Modifying treatment timing</li>
          <li>Recommending sensitivity-reducing toothpaste</li>
        </ul>
        
        <h3>Maintaining Your Results</h3>
        <ul>
          <li>Avoid staining substances for 48 hours after treatment</li>
          <li>Use a straw when drinking dark beverages</li>
          <li>Maintain excellent oral hygiene</li>
          <li>Schedule regular professional cleanings</li>
          <li>Consider periodic touch-up treatments</li>
        </ul>
        
        <p>Ready for a brighter smile? Let's discuss which whitening option is best for your specific needs and goals.</p>
      `
    },
    {
      id: 6,
      title: "From Fear to Confidence: Maria's Smile Transformation",
      excerpt: "Read how Maria overcame her dental anxiety and achieved the smile of her dreams through our gentle, personalized approach.",
      category: "Patient Stories",
      author: "Patient Care Team",
      date: "January 3, 2025",
      readTime: "3 min read",
      image: "https://images.pexels.com/photos/6812575/pexels-photo-6812575.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      featured: false,
      tags: ["Success Story", "Transformation", "Confidence"],
      content: `
        <h2>Maria's Journey: From Hiding Her Smile to Showing It Off</h2>
        <p>When Maria first contacted our office, she hadn't been to a dentist in over eight years. Severe dental anxiety, stemming from a traumatic childhood experience, had kept her away from dental care despite knowing she needed help.</p>
        
        <h3>The Initial Challenge</h3>
        <p>"I was so embarrassed about my teeth," Maria recalls. "I stopped smiling in photos, covered my mouth when I laughed, and avoided social situations. I knew I needed dental work, but the fear was paralyzing."</p>
        
        <p>Maria's concerns were valid. Years of avoiding dental care had led to several issues that needed attention, but her anxiety made the thought of treatment overwhelming.</p>
        
        <h3>Building Trust, One Step at a Time</h3>
        <p>Our first meeting with Maria wasn't in a treatment room – it was in our comfortable consultation area over a cup of tea. We listened to her concerns, explained our anxiety-management approach, and assured her that she was in control of the pace.</p>
        
        <p>"The team never made me feel judged," Maria says. "They were so understanding and patient. Dr. Johnson explained that my reaction was completely normal and that they had helped many patients with similar fears."</p>
        
        <h3>The Gradual Approach</h3>
        <p>We started slowly:</p>
        <ul>
          <li><strong>Visit 1:</strong> Just a consultation and tour of the facility</li>
          <li><strong>Visit 2:</strong> Simple examination with nitrous oxide for relaxation</li>
          <li><strong>Visit 3:</strong> Professional cleaning to build confidence</li>
          <li><strong>Visit 4:</strong> Beginning of restorative work with oral sedation</li>
        </ul>
        
        <h3>The Transformation Process</h3>
        <p>Over six months, Maria received comprehensive care including:</p>
        <ul>
          <li>Treatment of decay and gum disease</li>
          <li>Porcelain crowns for damaged teeth</li>
          <li>Professional whitening</li>
          <li>A custom night guard to protect her investment</li>
        </ul>
        
        <p>Each appointment built on the previous one, with Maria becoming more comfortable and confident with each visit.</p>
        
        <h3>The Life-Changing Results</h3>
        <p>"I can't believe the difference," Maria beams. "Not just in how my teeth look, but in how I feel about myself. I smile freely now, I'm more confident at work, and I actually look forward to my dental appointments!"</p>
        
        <h3>Beyond the Smile</h3>
        <p>Maria's transformation went beyond her teeth. Her increased confidence led to a promotion at work, renewed social connections, and even meeting her now-fiancé at a friend's party where she was no longer afraid to smile.</p>
        
        <h3>Maintaining Success</h3>
        <p>Today, Maria is one of our most enthusiastic patients. She never misses her regular check-ups and has referred several friends and family members to our practice.</p>
        
        <p>"I wish I had found this place years ago," she reflects. "But I'm grateful for the journey because it taught me that it's never too late to invest in yourself."</p>
        
        <h3>Your Journey Starts Here</h3>
        <p>If Maria's story resonates with you, know that you're not alone. Dental anxiety is common, and overcoming it is possible with the right support and approach. We're here to help you write your own success story.</p>
        
        <p>Every smile transformation begins with a single step. What will yours be?</p>
      `
    },
    {
      id: 7,
      title: "5 Signs You Need a Dental Check-Up (And Why It's Not Scary)",
      excerpt: "Learn the warning signs that indicate it's time for a dental visit, plus how our spa-like approach makes it stress-free.",
      category: "Dental Myths & Tips",
      author: "Dr. Emma Rodriguez",
      date: "December 30, 2024",
      readTime: "4 min read",
      image: "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      featured: false,
      tags: ["Prevention", "Health", "Check-up"],
      content: `
        <h2>Don't Wait for Pain – Recognize These Early Warning Signs</h2>
        <p>Many people only visit the dentist when they're in pain, but catching problems early can save you time, money, and discomfort. Here are five signs that it's time to schedule a check-up, plus why modern dental visits are nothing to fear.</p>
        
        <h3>1. Bleeding or Swollen Gums</h3>
        <p>Healthy gums shouldn't bleed during brushing or flossing. If you notice bleeding, swelling, or tenderness, it could indicate gingivitis or early gum disease. The good news? Caught early, gum disease is completely reversible with professional cleaning and improved home care.</p>
        
        <p><strong>What we do:</strong> Gentle deep cleaning using ultrasonic technology and laser therapy for comfortable, effective treatment.</p>
        
        <h3>2. Persistent Bad Breath</h3>
        <p>While occasional bad breath is normal, persistent halitosis can signal underlying dental issues like gum disease, tooth decay, or dry mouth. It's often one of the first signs that bacteria are building up in areas your toothbrush can't reach.</p>
        
        <p><strong>What we do:</strong> Comprehensive examination to identify the root cause, followed by targeted treatment and personalized oral hygiene recommendations.</p>
        
        <h3>3. Tooth Sensitivity</h3>
        <p>If hot, cold, sweet, or acidic foods cause sharp pain or discomfort, your teeth are trying to tell you something. Sensitivity can indicate worn enamel, exposed roots, or early decay.</p>
        
        <p><strong>What we do:</strong> Gentle examination using advanced diagnostic tools to pinpoint the cause, followed by comfortable treatment options like fluoride therapy or bonding.</p>
        
        <h3>4. Changes in Your Mouth</h3>
        <p>Any changes in your mouth deserve attention:</p>
        <ul>
          <li>White or red patches on gums or tongue</li>
          <li>Sores that don't heal within two weeks</li>
          <li>Changes in how your teeth fit together</li>
          <li>Loose or shifting teeth</li>
        </ul>
        
        <p><strong>What we do:</strong> Thorough oral cancer screening and comprehensive examination in our comfortable, spa-like environment.</p>
        
        <h3>5. It's Been More Than Six Months</h3>
        <p>Even without symptoms, regular check-ups every six months help prevent problems before they start. Professional cleanings remove plaque and tartar that home care can't eliminate, and early detection saves you from more extensive treatment later.</p>
        
        <p><strong>What we do:</strong> Comprehensive preventive care including digital X-rays, professional cleaning, and personalized oral health coaching.</p>
        
        <h3>Why Modern Check-Ups Are Different</h3>
        <p>If past dental experiences have left you anxious, you'll be pleasantly surprised by modern dental care:</p>
        
        <ul>
          <li><strong>Comfortable Environment:</strong> Our spa-like setting with soft music, aromatherapy, and comfortable seating</li>
          <li><strong>Advanced Technology:</strong> Digital X-rays with 90% less radiation, intraoral cameras for better visualization</li>
          <li><strong>Gentle Techniques:</strong> Ultrasonic cleaning, laser therapy, and topical anesthetics for maximum comfort</li>
          <li><strong>Personalized Care:</strong> We take time to understand your concerns and customize your experience</li>
        </ul>
        
        <h3>What to Expect at Your Visit</h3>
        <p>A typical check-up includes:</p>
        <ol>
          <li>Warm welcome and comfort assessment</li>
          <li>Review of your health history and concerns</li>
          <li>Gentle examination using advanced diagnostic tools</li>
          <li>Professional cleaning with ultrasonic technology</li>
          <li>Oral cancer screening</li>
          <li>Personalized treatment recommendations</li>
          <li>Home care coaching tailored to your needs</li>
        </ol>
        
        <h3>Prevention is the Best Medicine</h3>
        <p>Regular check-ups are your best defense against dental problems. They're also an investment in your overall health, as oral health is closely linked to heart health, diabetes management, and overall well-being.</p>
        
        <p>Don't let fear or busy schedules compromise your oral health. Modern dental check-ups are comfortable, efficient, and designed around your comfort and convenience.</p>
      `
    },
    {
      id: 8,
      title: "Digital Smile Design: See Your New Smile Before Treatment",
      excerpt: "Explore how cutting-edge technology lets you preview and perfect your smile makeover before any treatment begins.",
      category: "Smile Makeovers",
      author: "Dr. Sarah Johnson",
      date: "December 28, 2024",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/6812540/pexels-photo-6812540.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      featured: false,
      tags: ["Technology", "Design", "Preview"],
      content: `
        <h2>The Future of Smile Makeovers is Here</h2>
        <p>Imagine being able to see your perfect smile before any treatment begins. With Digital Smile Design (DSD), this isn't just possible – it's become the gold standard for cosmetic dentistry. This revolutionary technology takes the guesswork out of smile makeovers and ensures you love your results.</p>
        
        <h3>What is Digital Smile Design?</h3>
        <p>Digital Smile Design is a comprehensive treatment planning tool that uses advanced photography, video analysis, and 3D modeling to create a precise blueprint for your smile makeover. It considers your facial features, lip movement, speech patterns, and personal preferences to design your ideal smile.</p>
        
        <h3>The DSD Process: Step by Step</h3>
        
        <h4>1. Comprehensive Digital Analysis</h4>
        <p>We begin with high-resolution photographs and videos of your face and smile from multiple angles. These images capture:</p>
        <ul>
          <li>Your facial proportions and symmetry</li>
          <li>Lip movement during speech and smiling</li>
          <li>Current tooth position and alignment</li>
          <li>Gum line and tissue health</li>
        </ul>
        
        <h4>2. 3D Modeling and Design</h4>
        <p>Using specialized software, we create a detailed 3D model of your mouth and design your new smile. This process considers:</p>
        <ul>
          <li>Golden ratio proportions for optimal aesthetics</li>
          <li>Your unique facial features and bone structure</li>
          <li>Age-appropriate tooth characteristics</li>
          <li>Your lifestyle and personality preferences</li>
        </ul>
        
        <h4>3. Virtual Preview</h4>
        <p>Before any treatment begins, you'll see exactly how your new smile will look. We can show you:</p>
        <ul>
          <li>Static images of your new smile</li>
          <li>Video simulations of your smile in motion</li>
          <li>Different treatment options and their outcomes</li>
          <li>How your smile will age over time</li>
        </ul>
        
        <h4>4. Refinement and Approval</h4>
        <p>This is your opportunity to request changes. Want your teeth a little whiter? Prefer a different shape? We can adjust the design until it's perfect. You won't proceed until you're completely satisfied with the preview.</p>
        
        <h3>Benefits of Digital Smile Design</h3>
        
        <p><strong>Predictable Results:</strong> No surprises – you see your final result before treatment begins.</p>
        
        <p><strong>Improved Communication:</strong> Visual planning eliminates miscommunication between you and your dental team.</p>
        
        <p><strong>Minimally Invasive Planning:</strong> We can plan treatments that preserve maximum natural tooth structure.</p>
        
        <p><strong>Coordinated Care:</strong> If multiple specialists are involved, everyone works from the same detailed plan.</p>
        
        <p><strong>Increased Confidence:</strong> Knowing exactly what to expect reduces anxiety and increases satisfaction.</p>
        
        <h3>Treatment Options Enhanced by DSD</h3>
        
        <p><strong>Porcelain Veneers:</strong> Perfect shape, size, and color planning for natural-looking results.</p>
        
        <p><strong>Dental Implants:</strong> Precise placement planning for optimal function and aesthetics.</p>
        
        <p><strong>Orthodontics:</strong> Clear visualization of tooth movement and final positioning.</p>
        
        <p><strong>Full Mouth Reconstruction:</strong> Comprehensive planning for complex cases involving multiple treatments.</p>
        
        <h3>Real Patient Experience: Jennifer's Story</h3>
        <p>"I was nervous about getting veneers because I wasn't sure how they'd look. The Digital Smile Design process was amazing – I could see exactly how my new smile would look and even requested a few changes. When the treatment was complete, my smile looked exactly like the preview. It gave me so much confidence throughout the process." - Jennifer K.</p>
        
        <h3>The Technology Behind the Magic</h3>
        <p>Our DSD system uses:</p>
        <ul>
          <li>High-resolution digital cameras and specialized lenses</li>
          <li>3D scanning technology for precise measurements</li>
          <li>Advanced software for smile analysis and design</li>
          <li>Virtual reality capabilities for immersive previews</li>
        </ul>
        
        <h3>Investment in Your Confidence</h3>
        <p>While Digital Smile Design adds a planning phase to your treatment, it often saves time and money by ensuring the first result is the right result. More importantly, it gives you confidence and peace of mind throughout your smile transformation journey.</p>
        
        <h3>Is DSD Right for You?</h3>
        <p>Digital Smile Design is ideal for anyone considering:</p>
        <ul>
          <li>Cosmetic improvements to their smile</li>
          <li>Multiple dental treatments</li>
          <li>Complex restorative work</li>
          <li>Anyone who wants to see their results before treatment</li>
        </ul>
        
        <p>Ready to see your perfect smile? Schedule a Digital Smile Design consultation and discover the possibilities for your smile transformation.</p>
      `
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const openPost = (post) => {
    setSelectedPost(post);
    document.body.style.overflow = 'hidden';
  };

  const closePost = () => {
    setSelectedPost(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-violet-50">
      
      {/* Header Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-500/10 to-violet-600/10"></div>
        
        {/* Floating Background Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-purple-300/30 to-pink-300/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-gradient-to-br from-violet-300/30 to-purple-300/30 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-br from-pink-300/30 to-violet-300/30 rounded-full blur-xl animate-pulse"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 p-3 bg-white/80 rounded-full shadow-lg backdrop-blur-sm">
            <Sparkles className="w-8 h-8 text-purple-600" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-violet-600 bg-clip-text text-transparent pb-5">
            Dental Wellness Blog
          </h1>
          
          <p className="text-xl md:text-2xl text-purple-800 mb-12 max-w-3xl mx-auto">
            Expert insights, patient stories, and the latest in pain-free dentistry. 
            Your journey to optimal oral health starts with knowledge.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/90 backdrop-blur-sm border border-purple-200 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
            />
          </div>
        </div>
      </section>

      {/* Category Filter */}
<section className="py-8 px-4">
  <div className="max-w-6xl mx-auto">
    <div className="flex flex-wrap justify-center gap-4">
      {categories.map((category) => {
        const IconComponent = category.icon;
        return (
          <button
            key={category.name}
            onClick={() => setSelectedCategory(category.name)}
            className={`group flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              selectedCategory === category.name
                ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                : 'bg-white/80 text-purple-700 hover:bg-white hover:shadow-md hover:scale-105'
            }`}
          >
            <IconComponent className="w-4 h-4" />
            <span className="text-sm">{category.name}</span>
          </button>
        );
      })}
    </div>
  </div>
</section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-800 mb-8 text-center">Featured Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-purple-100"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-semibold rounded-full">
                        Featured
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-purple-700 text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-sm text-purple-600 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-purple-800 mb-4 group-hover:text-purple-600 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-purple-600 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="flex items-center gap-1 px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full"
                          >
                            <Tag className="w-3 h-3" />
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <button 
                        onClick={() => openPost(post)}
                        className="flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-800 transition-colors group"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {regularPosts.length > 0 && (
            <>
              <h2 className="text-3xl font-bold text-purple-800 mb-8 text-center">Latest Articles</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post) => (
                  <article
                    key={post.id}
                    className="group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-purple-100"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3">
                        <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-purple-700 text-xs font-semibold rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-xs text-purple-600 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold text-purple-800 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-purple-600 text-sm mb-4 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-xs text-purple-600">
                          <User className="w-3 h-3" />
                          <span>{post.author}</span>
                        </div>
                        
                        <button 
                          onClick={() => openPost(post)}
                          className="flex items-center gap-1 text-purple-600 text-sm font-semibold hover:text-purple-800 transition-colors group"
                        >
                          Read
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <div className="inline-block p-4 bg-white/80 rounded-full shadow-lg mb-6">
                <Search className="w-12 h-12 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-purple-800 mb-4">No articles found</h3>
              <p className="text-purple-600 mb-6">
                Try adjusting your search terms or selecting a different category.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Article Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl relative">
            <button
              onClick={closePost}
              className="absolute top-4 right-4 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
            >
              <X className="w-6 h-6 text-purple-600" />
            </button>
            
            <div className="relative">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-purple-700 text-sm font-semibold rounded-full">
                  {selectedPost.category}
                </span>
              </div>
            </div>
            
            <div className="p-8 max-h-[60vh] overflow-y-auto">
              <div className="flex items-center gap-4 text-sm text-purple-600 mb-6">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>{selectedPost.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{selectedPost.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{selectedPost.readTime}</span>
                </div>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-purple-800 mb-6">
                {selectedPost.title}
              </h1>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {selectedPost.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
              
              <div 
                  className="prose prose-lg max-w-none text-purple-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                  style={{
                    "--tw-prose-headings": "#7c3aed",
                    "--tw-prose-links": "#a855f7",
                    "--tw-prose-bold": "#6b21a8",
                    "--tw-prose-bullets": "#a855f7",
                  } as React.CSSProperties}
                />

              
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
            </div>
          </div>
        </div>
      )}

      {/* Newsletter Signup */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-violet-600 opacity-90"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 p-4 bg-white/20 rounded-full backdrop-blur-sm">
            <Heart className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Stay Updated on Dental Wellness
          </h2>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get the latest insights on pain-free dentistry, smile makeovers, and oral health tips delivered to your inbox.
          </p>
          
          
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-100 via-pink-100 to-violet-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-700 to-violet-600 bg-clip-text text-transparent">
            Ready to Experience Pain-Free Dentistry?
          </h2>
          
          <p className="text-xl text-purple-700 mb-8 max-w-2xl mx-auto">
            Transform your dental experience with our spa-like approach to oral healthcare.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              <span className="flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                See Our Clinic
              </span>
            </button>
            <button className="group px-8 py-4 bg-white text-purple-700 font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-purple-200">
              <span className="flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Book Your Visit
              </span>
            </button>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;