# Agent Prompt: Build Mobile Screens for AI-Native Airbnb Adaptive Trip Canvas

## Role

You are building a high-fidelity mobile product mockup for a re-imagined AI-native Airbnb app.

The output should be a polished mobile app/web prototype that can be transferred into Figma as high-fidelity screens. Prioritize visual quality, layout clarity, and product storytelling over real backend functionality.

---

## Project Title

**AI-Native Airbnb: Adaptive Trip Canvas**

---

## Product Concept

Design a mobile Airbnb home screen experience for a returning user with years of past behavior.

The user opens Airbnb in April. Airbnb recognizes that this user usually plans a July seaside vacation around this time of year. Instead of opening to a blank search screen, the app generates a personalized home screen called the **Adaptive Trip Canvas**.

The canvas includes:

- Past favorite homes
- New similar homes
- Experiences related to past trips
- Services the user has used before or may need again
- A live Trip Brief
- Voice and text input
- Quick chips
- Tap / circle / draw selection affordances
- Personalized explanations for why each recommendation fits

The user can steer the canvas by speaking, typing, tapping, circling items, giving feedback, or editing the Trip Brief.

---

## Design Goal

Create a premium mobile experience that feels like Airbnb, but reimagined around AI-native interaction.

The design should communicate this shift:

> Airbnb is no longer only a marketplace search interface. It is a personal travel-planning agent that generates, explains, and adapts a trip around the user’s history and intent.

---

## Design Style

Use a premium Airbnb-inspired mobile design.

### Visual Direction

- Clean white background
- Warm, human, travel-focused
- Large rounded cards
- High-quality travel photography placeholders
- Soft shadows
- Airbnb-like coral/red accent
- Calm modern typography
- Clear hierarchy
- Mobile-first layout
- iPhone-style proportions, approximately 390px wide
- Realistic fake data

### Avoid

- Do not make this look like a generic AI chatbot app.
- Do not overuse sci-fi gradients or abstract AI visuals.
- Do not hide the Airbnb mental model.
- Do not make the UI feel like only a chat thread.

The experience should still feel familiar to Airbnb users, but smarter and more adaptive.

---

## Required Navigation

Keep familiar Airbnb-style navigation.

At the top of the main screen include:

- Airbnb wordmark or simple logo mark
- Profile/avatar icon
- Tabs: **All**, **Homes**, **Experiences**, **Services**

Default selected tab: **All**

The **All** tab should show the AI-generated trip canvas that combines homes, experiences, and services.

---

## Main Scenario

A returning user opens the app in April.

The system has inferred:

- The user usually starts planning July trips in March or April.
- The user often takes seaside or coastal trips.
- The user has stayed in or saved quiet homes near water.
- The user cares about Wi-Fi, workspace, quietness, balcony/view, and family fit.
- The user has booked experiences and services as part of previous trips.

The main prompt should say:

> **Planning your July sea trip?**

Subtext:

> You usually start looking around now. I pulled together familiar stays, new options, experiences, and services based on your past summer trips.

---

## Core Object: Trip Brief

Create a persistent **Trip Brief** card that appears across screens.

The Trip Brief is the live object that the AI updates as the user interacts with the app.

### Example Trip Brief Content

**July Sea Trip Brief**

- 7–10 nights
- Coastal or seaside
- Quiet area
- Strong Wi-Fi
- Real workspace
- Balcony or view preferred
- Include arrival service
- Add one local food experience
- Avoid noisy tourist centers

The Trip Brief should visibly update across different screens.

---

## Input Model

The interface should show that the user can interact through:

- Voice
- Text
- Tap
- Circle / lasso selection
- Feedback buttons
- Quick chips

Use a bottom input bar on key screens.

Input placeholder:

> Ask Airbnb anything…

Include icons/buttons for:

- Keyboard / text
- Waveform / voice
- Draw / lasso

---

# Required Screens

Create the following mobile frames.

Each frame should include a clear text annotation panel to the right or below the frame explaining what the frame demonstrates.

Each annotation panel should include:

- Title
- User action
- AI behavior
- Why this matters
- Related PRD placeholder

Use this line in every annotation:

> Related PRD: [insert PRD link here]

---

## Frame 1: Root Home Screen / Adaptive Trip Canvas

### Purpose

Show the AI-generated starting point.

### User State

The user has just opened Airbnb in April.

### Screen Content

Include:

- Top nav: Airbnb logo, profile, All / Homes / Experiences / Services tabs
- Hero: **Planning your July sea trip?**
- Subtext about the seasonal pattern
- AI input bar
- Quick chips
- Generated canvas cards
- Trip Brief preview card

### Quick Chips

Use these chips:

- Do what I did last year
- Same trip, but better
- Somewhere new
- Quieter this year
- Lower budget
- Better for remote work
- Add family activities

### Generated Canvas Cards

Include a mixed set of homes, experiences, and services.

#### Past Favorite Home

**Casa Mare, Croatia**  
Stayed here twice  
Quiet, near water, strong Wi-Fi

Buttons:

- Check July availability
- Find similar

#### New Match

**Quiet Seaside Loft, Portugal**  
Similar to your Croatia stays, but less expensive

Buttons:

- Show me
- More like this

#### Experience

**Coastal Food Walk**  
Similar to food experiences you booked on past summer trips

#### Service

**Airport Pickup + Grocery Delivery**  
Used on your last July trip

### Annotation

Explain that the starting screen is already generated by user history, not blank search.

---

## Frame 2: Branch 1 / Repeat Last Year

### Purpose

Show the user choosing the lowest-effort path.

### User Action

The user taps:

> Do what I did last year

### Screen Content

Header:

> Your July trip, rebuilt

Show a ready-to-book package:

- Same or similar home
- Similar experience
- Same service bundle
- Availability status

Primary CTA:

- Review trip
- Book again

AI explanation:

> I rebuilt this from last July’s trip pattern. You can repeat it exactly or swap any part.

### Annotation

Explain the repeat-trip flow and how the AI reconstructs a previous trip from memory.

---

## Frame 3: Branch 2 / Same Trip, But Better

### Purpose

Show improvement and regeneration.

### User Action

The user taps:

> Same trip, but better

Then chooses:

> Quieter this year

### Screen Content

Header:

> Same coastal feel, quieter this year

Updated Trip Brief includes:

- Prioritize quiet neighborhoods
- Avoid nightlife zones
- Prioritize sleep-quality reviews

Regenerated cards:

- Quieter home
- Morning nature walk instead of crowded boat tour
- Grocery delivery for easier arrival

Include a card titled:

> Why this changed

Example explanation:

> I kept the seaside July pattern, but replaced busier locations with calmer areas and stronger sleep-quality signals.

### Annotation

Explain that the AI is not only searching. It is transforming the trip according to a qualitative change.

---

## Frame 4: Branch 3 / Focus Mode on One Home

### Purpose

Show a personalized listing detail view.

### User Action

The user taps a recommended home.

### Screen Content

Include:

- Listing image hero
- Home title
- Personalized summary section

Section title:

> Why this fits your July trip

Highlight cards:

- Verified Wi-Fi
- Real workspace
- Quiet area
- Balcony with sea view
- 8-minute walk to water
- Similar to your Croatia stay

Quick jump buttons:

- Bathroom
- Workspace
- Balcony
- Wi-Fi reviews
- Quietness

Bottom input:

> Ask about this home…

### Annotation

Explain that AI personalizes which listing details appear first based on what this user usually cares about.

---

## Frame 5: Branch 3B / Visual Feedback Mode

### Purpose

Show circle/draw interaction on images.

### User Action

The user opens the gallery from the personalized listing detail view, taps the plus menu, enables draw mode, circles a bathroom image, and says:

> I want a brighter bathroom.

Then the user circles a balcony and says:

> And on this photo, I want a bigger balcony and better view.

### Screen Content

Include:

- Gallery-like image layout
- Bathroom photo with hand-drawn coral circle
- Balcony photo with hand-drawn coral circle
- Transcript bubble
- AI response
- Updated Trip Brief chips

### Transcript Bubble

User:

> I want a brighter bathroom.

User:

> And on this photo, I want a bigger balcony and better view.

### AI Response

> Got it. Finding homes with a brighter bathroom, bigger balcony, better view, verified Wi-Fi, and a quiet coastal location.

### Updated Trip Brief Chips

- Brighter bathroom
- Bigger balcony
- Better view
- Quiet coastal area
- Verified Wi-Fi

### Annotation

Explain Feedback Mode and how visual markup becomes structured search criteria.

---

## Frame 6: Branch 4 / Future Concept: Mixed-Item Trip Builder

### Purpose

Document a future concept rather than an active prototype frame.

### User Action

The user could eventually circle a home, an experience, and a service and say:

> Build the trip around these.

### Screen Content

This frame is optional and should be treated as a future exploration, not part of the current board.

If shown, it can include:

- A mixed recommendation canvas
- Multi-item lasso selection
- AI-generated bundle summary
- Compare / save trip option actions

### Annotation

Explain that this is a possible future hyper-personalized trip-building mode, not part of the current prototype.

---

## Frame 7: Branch 5 / Itinerary Remix Mode

### Purpose

Show day-by-day trip editing.

### User Action

The user taps the Trip Brief, opens a saved itinerary from inside it, taps:

> Remix this itinerary

### Screen Content

Header:

> Remixing last July

Show a day-by-day itinerary.

Original itinerary:

**Day 1**

- Airport pickup
- Check-in
- Grocery delivery

**Day 2**

- Beach morning
- Harbor food walk
- Sunset boat tour

**Day 3**

- Slow breakfast
- Coastal swim
- Free evening

User command bubble:

> Move the harbor food walk to noon, remove the sunset boat tour, and add something for the kids at 5.

Updated itinerary:

**Day 2**

- Beach morning
- Harbor food walk at 12:00
- Kids beach club at 17:00
- Sunset boat tour removed

Include AI availability note:

> I checked availability and found two family-friendly options that fit the new schedule.

Then show one more conversational turn:

User:

> Actually, make the kids activity at 4 instead.

AI:

> Updated it. I moved the kids activity to 4 PM and kept the rest of the day the same.

### Annotation

Explain that AI-native Airbnb handles the trip as a live editable plan, not just a single listing search.

---

## Frame 8: Regenerated Results After Feedback

### Purpose

Show the end state after visual and conversational feedback.

### Screen Content

Header:

> Homes matching your changes

Show new result cards with chips:

- Bathroom with window
- Larger balcony
- Verified Wi-Fi
- Quiet coastal area
- Similar design style

Show updated Trip Brief.

CTAs:

- Compare top 3
- Save these options

### Annotation

Explain that the AI has converted feedback into a regenerated canvas.

---

# Frame Annotation Template

For every frame, include a nearby text block with this structure:

```text
Title:
[Frame title]

User action:
[What the user did]

AI behavior:
[What the system inferred or generated]

Why this matters:
[Why this is AI-native or important]

Related PRD:
[insert PRD link here]
```

---

# Fake Data

Use this fake data throughout the prototype.

## User

**Alex**

## Seasonal Pattern

Alex usually plans July seaside trips in March or April.

## Past Homes

- Casa Mare, Croatia
- Baltic Sea House, Poland
- Porto Garden Loft, Portugal

## New Homes

- Quiet Seaside Loft, Portugal
- Island View House, Greece
- Pine Coast Home, Croatia
- Dune House, Baltic Coast

## Experiences

- Coastal Food Walk
- Sunset Boat Tour
- Morning Nature Walk
- Family Beach Workshop

## Services

- Airport Pickup
- Grocery Delivery
- In-home Chef
- Mid-stay Cleaning

## User Preference Signals

- Quiet neighborhoods
- Strong Wi-Fi
- Real workspace
- Balcony/view
- Family-friendly activities
- Walkable restaurants
- Avoid nightlife zones
- Avoid dark bathrooms
- Prefers natural light

---

# Important UX Rules

## 1. Do not make this look like only a chatbot.

The core UI is a canvas with cards, images, chips, and trip objects.

## 2. Keep the Airbnb mental model.

Homes, Experiences, and Services should remain visible.

## 3. The AI should explain itself.

Every recommendation needs a “why this fits” reason.

## 4. The user must stay in control.

The Trip Brief should be editable.

## 5. Show generative behavior.

The canvas should visibly change between frames.

## 6. Show visual feedback.

Include at least one frame where the user circles part of an image and the AI converts it into search criteria.

## 7. Use realistic mobile polish.

Spacing, typography, cards, icons, and hierarchy should feel production-quality.

---

# Deliverable Format

Build a responsive/static mobile prototype with all frames visible as separate sections or routes.

Preferred output:

- One page showing all mobile frames side by side or vertically
- Each frame should be exportable as an image
- Each frame should have an annotation block
- Use reusable components for cards, chips, Trip Brief, input bar, nav tabs, and annotation panels
- Use placeholder images from local assets or safe image placeholders
- Make the design high-fidelity enough to transfer into Figma

---

# Suggested Implementation

Use **React** or **Next.js** with **Tailwind CSS**.

Create components:

- `MobileFrame`
- `TopNav`
- `TabNav`
- `HeroPrompt`
- `TripBrief`
- `RecommendationCard`
- `BundleCard`
- `QuickChipRow`
- `VoiceInputBar`
- `AnnotationPanel`
- `GalleryFeedbackImage`
- `ItineraryDay`
- `ComparisonCard`

No backend is required.

Use mocked JSON data.

Keep the code clean and componentized so screens can be adjusted quickly.

---

# Final Product Story

The prototype should communicate this product idea clearly:

> A returning Airbnb user opens the app, and instead of seeing a blank search page, they see an AI-generated trip canvas based on years of travel behavior. They can steer the canvas through voice, text, tapping, circling, and feedback. Airbnb continuously updates a live Trip Brief and regenerates homes, experiences, services, and itineraries around the user’s intent.
