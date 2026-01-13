import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, User, Eye, MessageSquare, ArrowRight, ChevronDown, ChevronUp, Workflow, ArrowLeft, Share2, Bookmark } from 'lucide-react';

interface BlogPageProps {
    onNavigate: (page: string) => void;
}

// 10 Posts Data with High-Quality Images and HTML Content
const posts = [
  {
    id: 1,
    title: "Zero-Touch IT: Automate Employee Onboarding with FlowNest",
    excerpt: "Stop the manual provisioning nightmare. See how to provision users across Jira, Slack, and Entra ID instantly.",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    author: "Alex Rivera",
    date: "Oct 24, 2024",
    views: 124,
    comments: 8,
    category: "IT Operations",
    content: `
      <h3 class="text-2xl font-bold text-white mb-4 mt-8">The Problem: The "Day One" Bottleneck</h3>
      <p class="mb-6">We’ve all been there. A new hire starts, but they spend their first three days waiting for access to Jira, Slack channels, and their company email. For IT and HR teams, manual provisioning is a nightmare of copy-pasting data between five different dashboards, leading to typos, security gaps, and frustrated employees.</p>
      
      <h3 class="text-2xl font-bold text-white mb-4">The Workflow Visualization</h3>
      <div class="bg-[#1A1A24] p-4 rounded-xl border border-brand-500/30 mb-6 font-mono text-sm text-brand-200">
        Trigger (Form Submit) → AI Agent (Processing) → Logic Router (Manager Check) → Provisioning Actions
      </div>

      <h3 class="text-2xl font-bold text-white mb-4">Step-by-Step Breakdown</h3>
      <ul class="list-disc pl-5 space-y-2 mb-6 marker:text-brand-500">
        <li><strong>Data Capture:</strong> The HR team submits a simple "Create User" form with the new hire's details.</li>
        <li><strong>AI Processing:</strong> An Anthropic-powered AI Agent ingests this data. Using a secure Postgres memory integration, it cross-references the new hire's department against existing roles to determine necessary permissions.</li>
        <li><strong>Intelligent Routing:</strong> The workflow hits a Logic Router asking, <em>"Is this user a Manager?"</em>
            <ul class="list-circle pl-5 mt-2 text-gray-400">
                <li>If <strong>YES</strong>: The flow branches to add the user to the private <code>#admin-leadership</code> Slack channel and elevates permissions.</li>
                <li>If <strong>NO</strong>: It proceeds to standard profile creation.</li>
            </ul>
        </li>
        <li><strong>Execution:</strong> FlowNest simultaneously creates the user in Jira (assigning them to the correct project board) and provisions their identity in Microsoft Entra ID.</li>
      </ul>

      <h3 class="text-2xl font-bold text-white mb-4">Tools Integrated</h3>
      <p class="mb-6">FlowNest Forms, Anthropic Claude (AI Model), PostgreSQL (Memory), Slack, Jira, Microsoft Entra ID.</p>

      <h3 class="text-2xl font-bold text-white mb-4">The Result</h3>
      <p class="mb-8 border-l-4 border-green-500 pl-4 bg-green-500/5 py-2">IT teams save ~45 minutes per new hire. Employees are productive from minute one, and security permissions are standardized—eliminating human error.</p>
    `
  },
  {
    id: 2,
    title: "Stop Googling Prospects: Build a 24/7 AI Sales Rep",
    excerpt: "Turn cold spreadsheets into warm leads. Automatically find CEO emails and draft personalized outreach.",
    image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    author: "Sarah Jenks",
    date: "Oct 22, 2024",
    views: 289,
    comments: 21,
    category: "Sales Automation",
    content: `
      <h3 class="text-2xl font-bold text-white mb-4 mt-8">The Problem: The Research Rabbit Hole</h3>
      <p class="mb-6">Sales Development Reps (SDRs) often spend 80% of their day researching leads and only 20% actually selling. Manually Googling a company, finding the CEO on LinkedIn, and guessing their email structure is an inefficient use of human talent.</p>

      <h3 class="text-2xl font-bold text-white mb-4">The Workflow Visualization</h3>
      <div class="bg-[#1A1A24] p-4 rounded-xl border border-brand-500/30 mb-6 font-mono text-sm text-brand-200">
        New Row (Sheets) → Searcher Agent → Research Agent (Perplexity) → CRM Sync → Draft Outreach
      </div>

      <h3 class="text-2xl font-bold text-white mb-4">Step-by-Step Breakdown</h3>
      <ol class="list-decimal pl-5 space-y-3 mb-6 marker:text-brand-500">
        <li><strong>The Trigger:</strong> You drop a list of company names and domains into a Google Sheet.</li>
        <li><strong>Location Scouting:</strong> A Map Searcher node validates the business location and headquarters.</li>
        <li><strong>Deep Research:</strong> FlowNest triggers Perplexity AI to perform a live web search. It identifies the current CEO, finds their public email address, and summarizes the company’s recent news (e.g., "Just raised Series B funding").</li>
        <li><strong>CRM Enrichment:</strong> This rich data is automatically pushed into HubSpot, creating a new contact with all fields populated.</li>
        <li><strong>Personalization:</strong> The AI drafts a highly personalized email referencing the recent news found by Perplexity, saving it as a draft in your outbox.</li>
      </ol>

      <h3 class="text-2xl font-bold text-white mb-4">Tools Integrated</h3>
      <p class="mb-6">Google Sheets, Google Maps API, Perplexity AI, HubSpot, Gmail / Outlook.</p>

      <h3 class="text-2xl font-bold text-white mb-4">The Result</h3>
      <p class="mb-8 border-l-4 border-green-500 pl-4 bg-green-500/5 py-2">Your sales team wakes up to enriched leads and drafted emails. You move from "cold outreach" to "informed conversations," increasing response rates by turning hours of research into seconds of automation.</p>
    `
  },
  {
    id: 3,
    title: "Turn Chaos into Zen: Automating Support Triage",
    excerpt: "Prioritize urgent tickets automatically based on sentiment. Don't let angry VIPs wait.",
    image: "https://images.pexels.com/photos/8867439/pexels-photo-8867439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    author: "David Chen",
    date: "Oct 18, 2024",
    views: 156,
    comments: 8,
    category: "Customer Support",
    content: `
      <h3 class="text-2xl font-bold text-white mb-4 mt-8">The Problem: Buried Urgent Tickets</h3>
      <p class="mb-6">In a shared support inbox, a critical bug report from a VIP client often looks the same as a "password reset" request. When support teams tackle tickets chronologically, urgent fires burn longer than they should, leading to churn.</p>

      <h3 class="text-2xl font-bold text-white mb-4">The Workflow Visualization</h3>
      <div class="bg-[#1A1A24] p-4 rounded-xl border border-brand-500/30 mb-6 font-mono text-sm text-brand-200">
        Ticket Received → Sentiment Brain → Intelligent Routing → Alert or Auto-Reply
      </div>

      <h3 class="text-2xl font-bold text-white mb-4">Step-by-Step Breakdown</h3>
      <ul class="list-disc pl-5 space-y-2 mb-6 marker:text-brand-500">
        <li><strong>Ingestion:</strong> A new ticket arrives via Zendesk or Email.</li>
        <li><strong>The "Brain":</strong> An AI Agent analyzes the text for two things: <strong>Sentiment</strong> (Angry vs. Happy/Neutral) and <strong>Category</strong> (Bug vs. Feature Request vs. How-to).</li>
        <li><strong>The Urgent Path:</strong> If the sentiment is "Angry" AND the category is "Bug," FlowNest immediately sends a Slack alert to the Support Head: <em>"Critical issue detected from [Customer Name]."</em></li>
        <li><strong>The Routine Path:</strong> If the ticket is a standard "How-to" question, the AI searches your Knowledge Base and drafts a helpful, accurate auto-reply for review.</li>
      </ul>

      <h3 class="text-2xl font-bold text-white mb-4">Tools Integrated</h3>
      <p class="mb-6">Zendesk / Email, OpenAI (Sentiment Analysis), Slack, FlowNest Knowledge Base.</p>

      <h3 class="text-2xl font-bold text-white mb-4">The Result</h3>
      <p class="mb-8 border-l-4 border-green-500 pl-4 bg-green-500/5 py-2">Critical issues are flagged in real-time, reducing response times for VIPs. Routine queries are handled 10x faster, allowing human agents to focus on complex problem-solving.</p>
    `
  },
  {
    id: 4,
    title: "Ditch the Data Entry: Automating Invoice Processing",
    excerpt: "Go paperless. Extract data from PDF invoices and route for approval automatically.",
    image: "https://images.pexels.com/photos/4386339/pexels-photo-4386339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    author: "Mike Ross",
    date: "Oct 15, 2024",
    views: 410,
    comments: 32,
    category: "Finance Automation",
    content: `
      <h3 class="text-2xl font-bold text-white mb-4 mt-8">The Problem: The Paper Chase</h3>
      <p class="mb-6">Finance teams are bogged down by email attachments. Opening PDFs, typing numbers into Excel, and chasing managers on Slack for approvals is a slow, error-prone process that delays month-end closing.</p>

      <h3 class="text-2xl font-bold text-white mb-4">The Workflow Visualization</h3>
      <div class="bg-[#1A1A24] p-4 rounded-xl border border-brand-500/30 mb-6 font-mono text-sm text-brand-200">
        Email Attachment → AI Vision Extraction → Approval Logic → Accounting Sync
      </div>

      <h3 class="text-2xl font-bold text-white mb-4">Step-by-Step Breakdown</h3>
      <ul class="list-disc pl-5 space-y-2 mb-6 marker:text-brand-500">
        <li><strong>Capture:</strong> FlowNest monitors a dedicated inbox (e.g., invoices@company.com) for emails with PDF attachments.</li>
        <li><strong>AI Vision:</strong> An AI Vision model scans the PDF. It extracts unstructured data—Vendor Name, Invoice Date, Line Items, and Total Amount—and converts it to structured JSON.</li>
        <li><strong>The Approval Gate:</strong>
            <ul class="list-circle pl-5 mt-2 text-gray-400">
                <li>Logic: If the <em>Total Amount</em> is > $500, FlowNest sends a message to the Manager on Slack with an "Approve/Reject" button.</li>
                <li>Logic: If < $500, it auto-approves.</li>
            </ul>
        </li>
        <li><strong>Sync:</strong> Once approved, the transaction is automatically created as a bill in QuickBooks or Xero, with the PDF attached for audit trails.</li>
      </ul>

      <h3 class="text-2xl font-bold text-white mb-4">Tools Integrated</h3>
      <p class="mb-6">Gmail / Outlook, AI Vision Model (GPT-4o or DocuAI), Slack (Interactive Messages), QuickBooks / Xero.</p>

      <h3 class="text-2xl font-bold text-white mb-4">The Result</h3>
      <p class="mb-8 border-l-4 border-green-500 pl-4 bg-green-500/5 py-2">A fully automated accounts payable process. No more manual data entry errors, a complete audit trail, and expense approvals that happen in minutes, not days.</p>
    `
  },
  {
    id: 5,
    title: "Scaling Workers for Enterprise",
    excerpt: "Horizontal scaling strategies for high-throughput automation workers handling millions of executions per day.",
    content: "<p>When you hit massive scale, a single worker node won't suffice. We explore Redis-backed queue architectures...</p>",
    image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    author: "Jessica Lee",
    date: "Oct 12, 2024",
    views: 198,
    comments: 12,
    category: "Scalability"
  },
  {
    id: 6,
    title: "No-Code vs Code-Low",
    excerpt: "Comparing the benefits of visual builders versus custom script nodes for complex business logic.",
    content: "<p>The debate between No-Code and Low-Code is ongoing...</p>",
    image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    author: "Amanda White",
    date: "Oct 10, 2024",
    views: 520,
    comments: 45,
    category: "Development"
  },
  {
    id: 7,
    title: "Predictive Analytics",
    excerpt: "Using AI to forecast trends and automate decision-making processes based on historical data.",
    content: "<p>Predictive analytics allows businesses to anticipate market changes...</p>",
    image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    author: "Robert Fox",
    date: "Oct 05, 2024",
    views: 275,
    comments: 19,
    category: "Analytics"
  },
  // Initially Hidden Posts
  {
    id: 8,
    title: "API Integration Mastery",
    excerpt: "A guide to connecting REST and GraphQL APIs to build a unified unified dashboard.",
    content: "<p>APIs are the glue of the modern web...</p>",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    author: "Jane Cooper",
    date: "Oct 01, 2024",
    views: 145,
    comments: 6,
    category: "Engineering"
  },
  {
    id: 9,
    title: "Secure Credential Management",
    excerpt: "How to manage API keys, OAuth tokens, and secrets securely within your automation workflows to prevent leaks.",
    content: "<p>Hardcoding API keys is a recipe for disaster...</p>",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    author: "Wade Warren",
    date: "Sep 28, 2024",
    views: 180,
    comments: 9,
    category: "Security"
  },
  {
    id: 10,
    title: "AI Ethics & Governance",
    excerpt: "Implementing guardrails and human-in-the-loop systems for responsible AI automation.",
    content: "<p>As we delegate more authority to AI agents, ethics and governance become critical...</p>",
    image: "https://images.pexels.com/photos/5614124/pexels-photo-5614124.jpeg?_gl=1*hr32wq*_ga*MjA5MTIyNzcyNy4xNzY4MzAwMzUw*_ga_8JE65Q40S6*czE3NjgzMDAzNDkkbzEkZzEkdDE3NjgzMDE0NTQkajEyJGwwJGgw",
    author: "Courtney Henry",
    date: "Sep 25, 2024",
    views: 310,
    comments: 24,
    category: "Ethics"
  }
];

const BlogPage: React.FC<BlogPageProps> = ({ onNavigate }) => {
    // State to toggle between showing 7 and 10 posts
    const [isExpanded, setIsExpanded] = useState(false);
    
    // State for viewing a single post
    const [selectedPost, setSelectedPost] = useState<typeof posts[0] | null>(null);

    // Simple state to simulate view increment on click
    const [viewCounts, setViewCounts] = useState(posts.map(p => ({ id: p.id, count: p.views })));

    const handlePostClick = (post: typeof posts[0]) => {
        // Increment view count
        setViewCounts(prev => prev.map(item => 
            item.id === post.id ? { ...item, count: item.count + 1 } : item
        ));
        // Open the post details
        setSelectedPost(post);
        window.scrollTo(0, 0);
    };

    const getViewCount = (id: number) => viewCounts.find(v => v.id === id)?.count || 0;

    // Logic: If expanded, show all (10). If not, show first 7.
    const displayedPosts = isExpanded ? posts : posts.slice(0, 7);

    // Render Single Post View
    if (selectedPost) {
        return (
            <div className="pt-32 pb-20 min-h-screen bg-[#0B0B14]">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto px-4"
                >
                    {/* Back Button */}
                    <button 
                        onClick={() => setSelectedPost(null)}
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group"
                    >
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> 
                        Back to Insights
                    </button>

                    {/* Post Header */}
                    <div className="mb-8">
                        <div className="flex items-center gap-4 mb-6">
                             <span className="px-3 py-1 bg-brand-600/10 border border-brand-500/20 text-brand-300 rounded-full text-xs font-semibold">
                                {selectedPost.category}
                            </span>
                            <span className="text-gray-500 text-sm flex items-center gap-2">
                                <Calendar size={14} /> {selectedPost.date}
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            {selectedPost.title}
                        </h1>
                        <div className="flex items-center justify-between border-b border-white/10 pb-8">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                                    {selectedPost.author.charAt(0)}
                                </div>
                                <div>
                                    <div className="text-white font-medium">{selectedPost.author}</div>
                                    <div className="text-xs text-gray-400">Editor • 5 min read</div>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
                                    <Bookmark size={20} />
                                </button>
                                <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
                                    <Share2 size={20} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Featured Image */}
                    <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-brand-900/20 mb-12 aspect-video relative">
                         <img 
                            src={selectedPost.image} 
                            alt={selectedPost.title} 
                            className="w-full h-full object-cover"
                        />
                         <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B14] to-transparent opacity-20"></div>
                    </div>

                    {/* Content */}
                    <div className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed mb-16">
                        <p className="text-xl text-white font-medium mb-8 border-l-4 border-brand-500 pl-4 italic">
                            {selectedPost.excerpt}
                        </p>
                        
                        {/* Dynamic HTML Content Injection */}
                        <div dangerouslySetInnerHTML={{ __html: selectedPost.content }} />

                        <div className="mt-12 pt-8 border-t border-white/10">
                            <p className="font-semibold text-brand-300">
                                Ready to automate your operations? 
                                <button onClick={() => onNavigate('signup')} className="ml-2 text-white underline hover:text-brand-400">
                                    Start your free trial with FlowNest today.
                                </button>
                            </p>
                        </div>
                    </div>

                    {/* Article Footer */}
                    <div className="bg-[#15151e] rounded-2xl p-8 border border-white/5 text-center mb-20">
                        <h3 className="text-2xl font-bold mb-4">Enjoyed this article?</h3>
                        <p className="text-gray-400 mb-6">Subscribe to our newsletter to get the latest automation insights delivered to your inbox.</p>
                        <div className="flex max-w-md mx-auto gap-2">
                             <input type="email" placeholder="Enter your email" className="flex-1 bg-[#0B0B14] border border-white/10 rounded-full px-5 py-3 text-white focus:outline-none focus:border-brand-500" />
                             <button className="bg-brand-600 hover:bg-brand-500 text-white px-6 py-3 rounded-full font-medium transition-colors">Subscribe</button>
                        </div>
                    </div>

                </motion.div>
            </div>
        );
    }

    // Render List View
    return (
        <div className="pt-32 pb-20 overflow-hidden min-h-screen">
            {/* Hero Section */}
            <section className="text-center px-4 mb-20 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-600/10 rounded-full blur-[100px] -z-10"></div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-block mb-4 px-4 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-sm font-medium"
                >
                    <span className="flex items-center gap-2"><Workflow size={14} /> Knowledge Hub</span>
                </motion.div>
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-brand-100 to-brand-300"
                >
                    Automation <span className="text-brand-500">Insights</span>
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
                >
                    Expert guides on AI agents, n8n workflows, and scaling your automated operations.
                </motion.p>
            </section>

            {/* Blog Grid */}
            <section className="max-w-7xl mx-auto px-4 mb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {displayedPosts.map((post, i) => (
                            <motion.article
                                key={post.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                className={`glass-card rounded-2xl border border-white/10 overflow-hidden flex flex-col group hover:border-brand-500/50 hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:scale-[1.02] transition-all duration-300 cursor-pointer h-full ${i === 0 ? 'md:col-span-2 lg:col-span-2' : ''}`}
                                onClick={() => handlePostClick(post)}
                            >
                                {/* Image Container */}
                                <div className={`relative overflow-hidden ${i === 0 ? 'h-64 md:h-80' : 'h-48'}`}>
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B14] to-transparent opacity-60 z-10"></div>
                                    <img 
                                        src={post.image} 
                                        alt={post.title} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-[#0B0B14]/80 backdrop-blur-md rounded-full text-xs font-semibold text-brand-300 border border-brand-500/20">
                                        {post.category}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex-1 flex flex-col relative z-20 -mt-10">
                                    <div className="flex items-center gap-4 text-xs text-gray-300 mb-4 bg-[#0B0B14]/60 backdrop-blur-md w-fit px-3 py-1.5 rounded-lg border border-white/5">
                                        <span className="flex items-center gap-1.5">
                                            <Calendar size={12} className="text-brand-400" /> {post.date}
                                        </span>
                                        <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                                        <span className="flex items-center gap-1.5">
                                            <User size={12} className="text-brand-400" /> {post.author}
                                        </span>
                                    </div>

                                    <h2 className={`font-bold text-white mb-3 group-hover:text-brand-300 transition-colors ${i === 0 ? 'text-3xl' : 'text-xl'} line-clamp-2`}>
                                        {post.title}
                                    </h2>
                                    
                                    <p className="text-sm text-gray-400 mb-6 line-clamp-3 flex-1 leading-relaxed">
                                        {post.excerpt}
                                    </p>

                                    {/* Footer Stats */}
                                    <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-auto">
                                        <div className="flex items-center gap-4 text-xs text-gray-500">
                                            <span className="flex items-center gap-1.5" title="Views">
                                                <Eye size={14} className="text-gray-400" /> {getViewCount(post.id)}
                                            </span>
                                            <span className="flex items-center gap-1.5" title="Comments">
                                                <MessageSquare size={14} className="text-gray-400" /> {post.comments}
                                            </span>
                                        </div>
                                        <button className="text-sm font-medium text-brand-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                            Read Article <ArrowRight size={14} />
                                        </button>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Load More Button - Only shows if we are on list view */}
                <div className="mt-20 text-center relative z-10">
                    <button 
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="group relative inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#1A1A24] border border-white/10 hover:border-brand-500/50 hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] transition-all duration-300"
                    >
                        <span className="text-sm font-medium text-white group-hover:text-brand-200">
                            {isExpanded ? "Show Less" : "Load More Articles"}
                        </span>
                        <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-500 transition-colors">
                            {isExpanded ? (
                                <ChevronUp size={14} className="text-white" />
                            ) : (
                                <ChevronDown size={14} className="text-white" />
                            )}
                        </div>
                    </button>
                    
                    {/* Visual indicator of hidden content */}
                    {!isExpanded && (
                         <div className="absolute -top-32 left-0 w-full h-32 bg-gradient-to-t from-[#0B0B14] to-transparent pointer-events-none"></div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default BlogPage;