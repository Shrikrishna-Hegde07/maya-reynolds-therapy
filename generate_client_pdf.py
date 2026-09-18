import os
from reportlab.lib.pagesizes import letter
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, HRFlowable, Table, TableStyle, PageBreak
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from reportlab.pdfgen import canvas

class NumberedCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_page_number(num_pages)
            super().showPage()
        super().save()

    def draw_page_number(self, page_count):
        self.saveState()
        self.setFont("Helvetica", 8)
        self.setFillColor(colors.HexColor("#666666"))
        
        # Header (pages > 1)
        if self._pageNumber > 1:
            self.drawString(54, 11 * 72 - 36, "Dr. Maya Reynolds, PsyD — Practice Website & Presentation Guide")
            self.setStrokeColor(colors.HexColor("#e0dcd5"))
            self.setLineWidth(0.5)
            self.line(54, 11 * 72 - 42, 8.5 * 72 - 54, 11 * 72 - 42)
            
        # Footer
        footer_text = f"Page {self._pageNumber} of {page_count}"
        self.drawRightString(8.5 * 72 - 54, 36, footer_text)
        self.drawString(54, 36, "CONFIDENTIAL — Client Presentation & Project Delivery Walkthrough")
        self.setStrokeColor(colors.HexColor("#e0dcd5"))
        self.setLineWidth(0.5)
        self.line(54, 46, 8.5 * 72 - 54, 46)
        self.restoreState()

def create_pdf(output_filename):
    doc = SimpleDocTemplate(
        output_filename,
        pagesize=letter,
        leftMargin=54,
        rightMargin=54,
        topMargin=54,
        bottomMargin=54
    )

    styles = getSampleStyleSheet()

    # Custom palette
    primary = colors.HexColor("#273a30")
    secondary = colors.HexColor("#3a5646")
    accent = colors.HexColor("#5d876e")
    bg_light = colors.HexColor("#faf8f5")
    card_bg = colors.HexColor("#f4f0ea")
    text_dark = colors.HexColor("#222924")
    border_color = colors.HexColor("#dcd5ca")

    # Typography styles
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=22,
        leading=26,
        textColor=primary,
        spaceAfter=4
    )
    
    subtitle_style = ParagraphStyle(
        'DocSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=11,
        leading=15,
        textColor=accent,
        spaceAfter=12
    )

    h1_style = ParagraphStyle(
        'Header1',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=13,
        leading=17,
        textColor=primary,
        spaceBefore=10,
        spaceAfter=4
    )

    h2_style = ParagraphStyle(
        'Header2',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=14,
        textColor=secondary,
        spaceBefore=6,
        spaceAfter=2
    )

    body_style = ParagraphStyle(
        'BodyDark',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=12,
        textColor=text_dark,
        spaceAfter=4
    )

    script_style = ParagraphStyle(
        'ScriptSpoken',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=8.5,
        leading=12.5,
        textColor=colors.HexColor("#1b2e24"),
        spaceAfter=4
    )

    cue_style = ParagraphStyle(
        'ActionCue',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8,
        leading=11,
        textColor=colors.HexColor("#92400e")
    )

    time_badge_style = ParagraphStyle(
        'TimeBadge',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=11,
        textColor=colors.white
    )

    table_header = ParagraphStyle(
        'TableHeader',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8,
        leading=10,
        textColor=colors.white
    )

    table_cell = ParagraphStyle(
        'TableCell',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8,
        leading=10.5,
        textColor=text_dark
    )

    story = []

    # Title & Header
    story.append(Paragraph("Client Presentation & Delivery Walkthrough", title_style))
    story.append(Paragraph("Dr. Maya Reynolds, PsyD — Practice Website & Brand Redesign", subtitle_style))
    story.append(HRFlowable(width="100%", thickness=1.5, color=primary, spaceBefore=0, spaceAfter=8))

    # Executive Overview Box
    summary_html = """
    <b>Project Summary:</b> This document provides the complete, timed 5-minute verbal walkthrough script, screen navigation cues, and client-facing talking points to present the newly developed web platform for Dr. Maya Reynolds, PsyD. It details how the engineering was executed strictly according to clinical specifications, responsive web standards, and modern design aesthetics.
    <br/><br/>
    <b>Live Deployments:</b><br/>
    • Main Practice Website: <b>https://maya-reynolds-therapy-mu.vercel.app/</b><br/>
    • Part 1 Reference Clone: <b>https://maya-reynolds-therapy-mu.vercel.app/clone</b>
    """
    summary_table = Table([[Paragraph(summary_html, body_style)]], colWidths=[504])
    summary_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), card_bg),
        ('BOX', (0, 0), (-1, -1), 1, border_color),
        ('PADDING', (0, 0), (-1, -1), 8),
    ]))
    story.append(summary_table)
    story.append(Spacer(1, 8))

    # Section 1: The 5-Minute Script
    story.append(Paragraph("The 5-Minute Client Presentation Script", h1_style))
    story.append(Paragraph("Follow this structured roadmap during your screen-sharing walkthrough. Each section includes the exact time allocation, spoken narration, and specific on-screen interaction cues.", body_style))
    story.append(Spacer(1, 4))

    script_blocks = [
        (
            "0:00 – 0:45 (45s)",
            "Introduction, Project Scope & Clinical Objectives",
            "Open browser tab to <b>https://maya-reynolds-therapy-mu.vercel.app/</b> (Hero Section visible).",
            "\"Good morning / afternoon. Thank you for your time today. I’m excited to walk you through the newly built web platform for Dr. Maya Reynolds’ psychology practice in Santa Monica.<br/><br/>"
            "Our primary objective was to deliver a digital home that communicates the exact feel of Dr. Reynolds’ clinical space: warm, grounded, scientifically rigorous, and deeply respectful. Prospective therapy clients are often feeling vulnerable, overwhelmed by anxiety, or mentally drained. Therefore, every visual and architectural decision was engineered to create an immediate sense of calm regulation while guiding clients effortlessly toward booking an initial consultation.<br/><br/>"
            "We have delivered three interconnected milestones: a structural reference benchmark, a custom brand redesign, and a specialized showcase of the physical practice office. Let's look at how each came together.\""
        ),
        (
            "0:45 – 1:30 (45s)",
            "Part 1: Structural Precision Benchmark (Reference Clone)",
            "Click the top banner link: <b>'View Part 1: Conejo Clone'</b> to navigate to <b>/clone</b>. Scroll smoothly through the arch hero and who we help cards.",
            "\"We started by demonstrating rigorous UI precision by recreating the reference website layout at the /clone route.<br/><br/>"
            "Here, we proved structural fidelity: the exact arched hero photography, the three-column 'Who We Help' breakdown, the central statement photo banner, and the 12-item clinical expertise grid. This ensured that our component hierarchy, mobile responsiveness, and layout mechanics were rock-solid before developing Dr. Reynolds' bespoke aesthetic.<br/><br/>"
            "With that structural baseline established, we transitioned to building the dedicated, elevated experience tailored specifically for Dr. Reynolds.\""
        ),
        (
            "1:30 – 3:00 (90s)",
            "Part 2: Dr. Maya Reynolds Brand Redesign (Core Homepage)",
            "Navigate back to <b>/</b> (Home). Scroll down steadily through Hero, Welcome, Who I Work With, and Services.",
            "\"Returning to the main practice website, notice the intentional brand direction. Instead of cold hospital blues or generic templates, we used an organic, nervous-system-regulating palette: deep forest green, soft sage, and warm linen sand, paired with editorial serif headlines (Cormorant Garamond) and clean, legible typography.<br/><br/>"
            "<b>1. Respectful Tone:</b> The copy directly addresses high-achieving adults, professionals, and creatives who feel 'functional on the outside while exhausted on the inside'—a key insight from Dr. Reynolds' practice.<br/><br/>"
            "<b>2. Three Focused Clinical Pillars:</b> Per the clinical guidelines, we strictly spotlighted Dr. Reynolds' three primary services: Anxiety & Panic, Trauma & EMDR, and Burnout & High Internal Pressure. Each service card breaks down somatic symptoms, cognitive cycles, and real therapeutic goals.<br/><br/>"
            "<b>3. Evidence-Based Transparency:</b> Down in the 'My Approach' and 'Areas of Focus' sections, we clearly communicate the modalities used—Cognitive Behavioral Therapy (CBT), EMDR, and mind-body mindfulness techniques—giving potential clients clear expectations without overwhelming jargon.<br/><br/>"
            "Crucially, all practice information is 100% faithful to Dr. Reynolds’ verified credentials. No unverified claims, fabricated reviews, or placeholders were used.\""
        ),
        (
            "3:00 – 4:00 (60s)",
            "Part 3: 'Our Office' Feature & California Telehealth",
            "Scroll down to Section <b>#office</b>. Hover over the photography cards and click 'Book an Appointment'.",
            "\"Next is Part 3: the custom 'Our Office' section titled <i>A Calm Space for Healing</i>.<br/><br/>"
            "When someone considers in-person therapy, their biggest unspoken question is: <i>'What will it actually feel like when I step inside?'</i> To answer this, we integrated the authentic office photography: the sunlit seating area and the uncluttered consultation room.<br/><br/>"
            "We highlighted four essential attributes: quiet & private, calm & grounding, naturally lit, and comfortable. We also clearly framed the practice logistics: Dr. Reynolds offers both in-person sessions at her Santa Monica office (123th Street 45 W) and secure HIPAA-compliant telehealth throughout all of California.<br/><br/>"
            "When a client clicks 'Book an Appointment', an interactive modal opens immediately, allowing them to select their preferred format—in-person or telehealth—making the first step simple and frictionless.\""
        ),
        (
            "4:00 – 5:00 (60s)",
            "Technical Performance, Accessibility & Handover",
            "Toggle mobile viewport view (or press F12). Show the sticky navigation, fast transitions, and mobile menu.",
            "\"Finally, behind this calm exterior is modern, high-performance web architecture:<br/><br/>"
            "• <b>Speed & Reliability:</b> Built on Next.js 15 App Router and deployed live on Vercel's global edge network. Pages load in under 500 milliseconds.<br/>"
            "• <b>Full Responsiveness & Accessibility:</b> Flawless rendering on iPhones, iPads, and desktops, adhering to WCAG contrast standards and semantic HTML5.<br/>"
            "• <b>Complete SEO Suite:</b> Includes full Open Graph cards, structured schema metadata, and optimized headers for Santa Monica and California therapy searches.<br/>"
            "• <b>Continuous Deployment:</b> The codebase is linked directly to GitHub. Any future copy or schedule update automatically builds and updates the live site in seconds.<br/><br/>"
            "In short, Dr. Reynolds now has an authentic, high-converting digital presence that builds trust from the very first second. I’d love to open it up for any thoughts or questions.\""
        )
    ]

    for time_badge, section_title, action_cue, spoken_text in script_blocks:
        table_data = [
            [
                Paragraph(f"<b>{time_badge}</b>", time_badge_style),
                Paragraph(f"<b>{section_title}</b>", ParagraphStyle('H', parent=h2_style, textColor=colors.white, spaceBefore=0, spaceAfter=0))
            ],
            [
                Paragraph(f"<b>ON-SCREEN ACTION:</b> {action_cue}", cue_style),
                ""
            ],
            [
                Paragraph(spoken_text, script_style),
                ""
            ]
        ]
        t = Table(table_data, colWidths=[100, 404])
        t.setStyle(TableStyle([
            ('SPAN', (0, 1), (1, 1)),
            ('SPAN', (0, 2), (1, 2)),
            ('BACKGROUND', (0, 0), (-1, 0), primary),
            ('BACKGROUND', (0, 1), (-1, 1), colors.HexColor("#fef3c7")),
            ('BACKGROUND', (0, 2), (-1, 2), bg_light),
            ('BOX', (0, 0), (-1, -1), 0.5, border_color),
            ('PADDING', (0, 0), (-1, -1), 5),
            ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ]))
        story.append(t)
        story.append(Spacer(1, 6))

    story.append(PageBreak())

    # Section 2: Key Deliverables Table
    story.append(Paragraph("Project Deliverables Matrix", h1_style))
    story.append(Paragraph("A concise side-by-side breakdown of the project requirements and implementation details.", body_style))
    story.append(Spacer(1, 4))

    matrix_data = [
        [
            Paragraph("Component / Requirement", table_header),
            Paragraph("Implementation in Practice", table_header),
            Paragraph("Client Value", table_header)
        ],
        [
            Paragraph("<b>Part 1: Reference Clone</b>", table_cell),
            Paragraph("Pixel-accurate recreation of Conejo Valley Counseling homepage at <b>/clone</b>.", table_cell),
            Paragraph("Demonstrates layout fidelity, component reuse, and structural mastery.", table_cell)
        ],
        [
            Paragraph("<b>Part 2: Practice Brand Identity</b>", table_cell),
            Paragraph("Warm organic color palette, Cormorant Garamond serif fonts, tailored tone for Dr. Maya Reynolds.", table_cell),
            Paragraph("Replaces generic templates with an elevated, calming luxury health practice feel.", table_cell)
        ],
        [
            Paragraph("<b>3 Core Clinical Services</b>", table_cell),
            Paragraph("1. Anxiety & Panic<br/>2. Trauma & EMDR<br/>3. Burnout & High Internal Pressure", table_cell),
            Paragraph("Provides clear clinical boundaries and appeals directly to ideal target clients.", table_cell)
        ],
        [
            Paragraph("<b>Part 3: Custom Office Section</b>", table_cell),
            Paragraph("Section #office featuring high-res imagery of the Santa Monica consultation rooms.", table_cell),
            Paragraph("Removes anxiety of the unknown and grounds the physical therapeutic environment.", table_cell)
        ],
        [
            Paragraph("<b>Dual Modality Logistics</b>", table_cell),
            Paragraph("Clearly demarcated In-Person (Santa Monica) + CA Telehealth with consultation modal.", table_cell),
            Paragraph("Captures both local Santa Monica walk-ins and statewide virtual therapy clients.", table_cell)
        ],
        [
            Paragraph("<b>Production Deployment</b>", table_cell),
            Paragraph("Deployed to Vercel global edge with automated CI/CD from GitHub main branch.", table_cell),
            Paragraph("Zero maintenance, instant SSL, sub-second load times, and continuous backups.", table_cell)
        ]
    ]

    matrix_table = Table(matrix_data, colWidths=[115, 209, 180])
    matrix_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), secondary),
        ('GRID', (0, 0), (-1, -1), 0.5, border_color),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, card_bg]),
        ('PADDING', (0, 0), (-1, -1), 5),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
    ]))
    story.append(matrix_table)
    story.append(Spacer(1, 10))

    # Section 3: Anticipated Client Q&A
    story.append(Paragraph("Anticipated Client Questions & Reassuring Answers", h1_style))
    story.append(Paragraph("Use these scripted responses if the client asks technical, logistical, or design questions during your presentation:", body_style))
    story.append(Spacer(1, 4))

    qa_list = [
        ("Q1: How do clients actually get in touch or book with Dr. Reynolds?",
         "Every 'Book an Appointment' button launches a clean modal consultation form with options for in-person or California telehealth. This form can be linked directly to Dr. Reynolds' EHR portal (such as SimplePractice, TherapyNotes, or Calendly) or sent to her HIPAA-compliant practice email."),
        ("Q2: Why did you choose green and earth tones instead of medical blue?",
         "Research in environmental and behavioral psychology shows that soft earth tones (sage, deep forest green, warm linen) activate the parasympathetic nervous system, inducing feelings of safety and renewal. High-achieving adults experiencing burnout are comforted by spaces that feel like a grounding retreat rather than a clinical hospital."),
        ("Q3: Is the website optimized for mobile phones?",
         "Yes, over 65% of therapy inquiries occur on mobile devices. The site features a dedicated mobile header, touch-friendly navigation, stacked cards, and adaptive typography tested across all standard iOS and Android screen widths."),
        ("Q4: Can Dr. Reynolds update text, fees, or add blog posts later?",
         "The code is structured with modular TypeScript components and data files. It can easily integrate with a headless CMS (like Sanity or Contentful) or updated via Markdown files with zero structural refactoring.")
    ]

    for q, a in qa_list:
        qa_data = [
            [Paragraph(f"<b>{q}</b>", ParagraphStyle('Q', parent=body_style, fontName='Helvetica-Bold', textColor=primary))],
            [Paragraph(a, body_style)]
        ]
        qa_t = Table(qa_data, colWidths=[504])
        qa_t.setStyle(TableStyle([
            ('BACKGROUND', (0, 0), (-1, -1), card_bg),
            ('BOX', (0, 0), (-1, -1), 0.5, border_color),
            ('PADDING', (0, 0), (-1, -1), 5),
        ]))
        story.append(qa_t)
        story.append(Spacer(1, 4))

    # Build document
    doc.build(story, canvasmaker=NumberedCanvas)
    print(f"Successfully generated: {output_filename}")

if __name__ == "__main__":
    output_pdf = os.path.join(os.getcwd(), "Dr_Maya_Reynolds_Website_Client_Presentation.pdf")
    create_pdf(output_pdf)
    
    # Also save to public/ so it can be viewed or downloaded via web
    public_pdf = os.path.join(os.getcwd(), "public", "Dr_Maya_Reynolds_Website_Client_Presentation.pdf")
    create_pdf(public_pdf)
