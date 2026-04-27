/**
 * Resume Data - Single Source of Truth for Portfolio Content
 * 
 * This file exports all the content that appears on the home page.
 * When you update this file, the home page automatically updates.
 * 
 * Structure:
 * - heroTag: Tagline under the name
 * - heroTitle: Your name
 * - heroAccent: The second line (appears in cyan/accent color)
 * - summary: Main bio/elevator pitch
 * - headline: Subheading (optional)
 * - featuredProjects: Array of 3 featured projects with outcomes
 * - featuredAnalyses: Array of 3 featured case studies/insights
 * 
 * To update the home page:
 * 1. Edit this file
 * 2. Refresh your browser
 * 3. Changes appear instantly
 */

export const resumeContext = {
    // Appears above the main title in a pill-shaped badge
    heroTag: 'Product & Business Strategy | E-commerce & Marketplace',

    // Your name - large heading
    heroTitle: 'Prasanth Priyan',

    // Appears in accent color (electric cyan) - completes the headline
    heroAccent: 'Product Manager',

    // Main bio/summary - explains who you are and what you do
    summary:
        'MBA from IIM Calcutta with 3+ years of product management and business analysis experience. Specialized in e-commerce and marketplace optimization through data-driven decisions, user research, and cross-functional collaboration.',

    // Optional: additional headline/tagline
    headline: 'Turning market insights into measurable product impact.',

    /**
     * Featured Projects Array
     * Shows 3 best projects on home page, with links to full project grid
     * 
     * Each project has:
     * - id: unique identifier
     * - title: project name
     * - description: outcome + impact (quantify when possible)
     * - tags: 2-3 relevant skills/domains
     * - link: placeholder for future project detail page
     */
    featuredProjects: [
        {
            id: 1,
            title: 'Cannibalization Risk Identification & Market Realignment',
            description:
                'Conducted 40+ user interviews and comprehensive market surveys at BigShyft (InfoEdge) to identify structural cannibalization risks impacting business objectives. Findings drove organizational realignment and strategic restructuring.',
            tags: ['User Research', 'Market Analysis', 'Strategy'],
            link: '#',
        },
        {
            id: 2,
            title: 'Promotion & Discount Platform Launch',
            description:
                'Designed and deployed 15+ promotion templates using SAP Hybris for e-commerce applications at CGI. Increased customer engagement by 20% and improved deal utilization across the customer base.',
            tags: ['E-commerce', 'Product Launch', 'SAP Hybris'],
            link: '#',
        },
        {
            id: 3,
            title: 'Safety Risk Reduction Through AI & Data',
            description:
                'Reduced safety risks by 30% in high-risk scenarios using AI models and data-driven strategies. Supported analysis with ROI modeling and A/B testing to validate impact at scale.',
            tags: ['Data Analysis', 'AI/ML', 'Risk Mitigation'],
            link: '#',
        },
    ],

    /**
     * Featured Analyses Array
     * Shows 3 key insights/case studies on home page
     * 
     * Each analysis has:
     * - id: unique identifier
     * - title: analysis topic
     * - summary: brief description of what the analysis covers
     */
    featuredAnalyses: [
        {
            id: 1,
            title: 'E-Commerce Onboarding Optimization',
            summary:
                'Framework for optimizing customer onboarding in marketplace environments. Combines user research insights with conversion analytics to reduce friction and improve time-to-first-purchase.',
        },
        {
            id: 2,
            title: 'Dynamic Pricing & Promotion Strategy',
            summary:
                'Analysis of promotion effectiveness and pricing elasticity in e-commerce. Explores when discounting drives volume versus when it erodes margins.',
        },
        {
            id: 3,
            title: 'Cross-Functional Product Delivery',
            summary:
                'Best practices for orchestrating product delivery across engineering, design, business, and support teams in fast-moving environments.',
        },
    ],
};
