# PRD / Product Concept: AI-Native Airbnb Adaptive Trip Canvas

**Document:** `01_PRD_AI_Native_Airbnb_Adaptive_Trip_Canvas.md`  
**Related Backend Tech Spec:** [02_Backend_Tech_Spec_User_Travel_Memory_GraphRAG.md](./02_Backend_Tech_Spec_User_Travel_Memory_GraphRAG.md)  
**Related Agent Build Prompt:** [airbnb_ai_native_agent_prompt.md](./airbnb_ai_native_agent_prompt.md)  
**Project:** Re-imagined Airbnb as an AI-Native Application  
**Primary Surface:** Mobile app home screen  
**Primary User:** Returning Airbnb user with rich historical behavior  

---

## 1. Product Summary

This concept reimagines Airbnb as an AI-native travel application centered around an **Adaptive Trip Canvas**.

Instead of opening to a static search page, Airbnb opens to a personalized, generated planning surface that understands the returning user's travel history, seasonal behavior, past bookings, saved homes, app analytics, service usage, experience bookings, and current context.

The primary scenario:

A returning user opens Airbnb in March or April. Airbnb recognizes that this user usually returns around this time to plan a July seaside trip. The app generates a personalized home screen that includes:

- Past favorite homes
- New homes with similar qualities
- Experiences related to past trips
- Services the user used before or may need again
- A draft Trip Brief
- Voice and text input
- Tap, circle, and draw-based selection
- Personalized explanations for why each recommendation fits

The goal is not to replace Airbnb with a chatbot. The goal is to make the Airbnb home screen become a live, intelligent planning surface.

---

## 2. Product Thesis

Traditional Airbnb starts with user input:

> Where are you going?

AI-native Airbnb should start with informed intent:

> I think I know what trip you are likely here to plan. Here is a useful starting point. Tell me what to change.

The AI-native shift is:

| Current Model | AI-Native Model |
|---|---|
| Static search page | Generated trip canvas |
| User starts from blank query | System starts from user memory and likely intent |
| Homes, experiences, services are separate categories | Homes, experiences, and services are composed into trip options |
| Filters define intent | Conversation, behavior, gestures, and feedback define intent |
| Listing pages show the same information to everyone | Listing pages surface what this user cares about most |
| User scrolls to inspect details | User can ask, tap, circle, or jump directly to relevant evidence |
| Search results update through filters | The canvas updates through a live Trip Brief |

---

## 3. Why This Fits Airbnb's Direction

Airbnb has already moved beyond only homes. Its recent product direction includes Homes, Experiences, Services, and a redesigned app experience. This AI-native concept builds on that direction by turning those categories into a unified trip-planning canvas.

The product idea is not:

> Add a chatbot to Airbnb.

The product idea is:

> Let AI compose the whole trip surface around the user's travel memory and current intent.

---

## 4. Primary User

The concept focuses on a returning user with rich historical behavior.

This user has:

- Booked homes over several years
- Saved homes without booking them
- Viewed many listings and photos
- Inspected specific listing sections such as Wi-Fi, bathrooms, balcony, reviews, and location
- Booked experiences
- Used services such as airport pickup, grocery delivery, in-home chef, or cleaning
- Planned similar trips at similar times of year
- Spent within recognizable budget ranges
- Revisited familiar locations while also exploring similar new ones

This returning user is the best user for the concept because the product can show real AI-native personalization instead of forcing a new user through onboarding questions.

---

## 5. Example Scenario

The user opens Airbnb in April.

The system detects:

- The user often starts planning July trips in March or April
- Past July trips were often seaside or coastal
- The user often books 7–10 night trips
- The user prefers quiet areas
- The user frequently checks Wi-Fi and workspace details
- The user spends time looking at bathrooms, balconies, and views
- The user often books or considers arrival-related services
- The user has booked local food or family activities in previous trips

The home screen opens with:

> **Planning your July sea trip?**

Subtext:

> You usually start looking around now. I pulled together familiar stays, new options, experiences, and services based on your past summer trips.

---

## 6. Core Product Object: The Trip Brief

The **Trip Brief** is the central object of the AI-native experience.

It is a live, editable summary of what Airbnb believes the user wants.

Example:

```text
July Sea Trip Brief

7–10 nights
Coastal or seaside
Quiet area
Strong Wi-Fi
Real workspace
Balcony or view preferred
Family-friendly activities
Arrival service helpful
One local food experience
Avoid noisy tourist centers
Similar to past Croatia / Portugal / Baltic stays
```

Every interaction updates the Trip Brief:

- Voice request
- Text request
- Tapping a chip
- Tapping a home
- Circling multiple items
- Giving thumbs up/down feedback
- Marking up a photo
- Saving or hiding listings
- Editing itinerary days
- Choosing a service or experience

The Trip Brief makes the AI understandable. It shows the user what the system currently believes and lets the user correct it.

---

## 7. UX Model

The interface uses four main modes.

### 7.1 Trip Canvas Mode

This is the root home screen.

It shows the whole planning space:

- Past homes
- New similar homes
- Experiences
- Services
- Draft bundles
- Trip Brief
- Voice/text input
- Quick chips
- Draw/circle tool

This is where the user starts.

### 7.2 Focus Mode

The user opens one entity:

- One home
- One experience
- One service
- One past trip

The page adapts to the user's known decision behavior.

For a home, the app may surface:

- Wi-Fi evidence
- Workspace quality
- Noise level
- Bathroom photos
- Balcony/view
- Distance to water
- Family fit
- Cancellation policy
- Relevant review snippets

The key idea:

> The AI does not only personalize which listing appears. It personalizes which listing details appear first.

### 7.3 Feedback Mode

The user marks up what they like or dislike.

Examples:

- Circle a bathroom photo: “I like this, but I want natural light.”
- Circle a balcony: “Bigger balcony, better view.”
- X out a bed: “I hate this bed style.”
- Tap a workspace: “Find more with a real desk like this.”

The AI converts visual and spoken feedback into structured search criteria.

### 7.4 Itinerary Mode

The user reviews or edits a trip day by day.

Example:

```text
Day 1:
Airport pickup
Check-in
Grocery delivery

Day 2:
Beach morning
Food walk
Free evening

Day 3:
Family activity
Dinner nearby
```

The user can say:

- “Move the food walk to noon.”
- “Remove the boat tour.”
- “Add something for the kids at 5.”
- “Make the first two days lighter.”
- “Keep the home but change the experiences.”

This mode treats Airbnb as a trip-planning agent, not just a listing marketplace.

---

## 8. Interaction Model

The user can steer the app through five input styles.

### 8.1 Voice

Example:

> Like last summer, but quieter and with better Wi-Fi.

### 8.2 Text

Example:

> Find me a seaside home in July with a balcony, verified Wi-Fi, and a real workspace.

### 8.3 Tap

The user taps a home, experience, service, image, chip, or itinerary item.

### 8.4 Draw / Circle / Lasso

The user circles items on the canvas.

Example:

Circle:

- Quiet Portugal Home
- Coastal Food Walk
- Grocery Delivery

Then say:

> Build the trip around these.

The user can also circle part of an image.

Example:

> I like this bathroom, but with a window.

### 8.5 Feedback

The user can:

- Thumbs up
- Thumbs down
- Save
- Hide
- Compare
- Ask for “more like this”
- Ask for “less like this”

The system should clarify ambiguous feedback.

Example:

If the user says “more like this,” Airbnb can ask:

> More like this based on location, price, interior style, quietness, beach access, workspace, or overall vibe?

---

## 9. Starting Screen

### Top Navigation

Keep the Airbnb mental model.

```text
Airbnb logo                       Profile

All     Homes     Experiences     Services
```

Default selected tab: **All**

The All tab is the AI-generated canvas. The user can still switch to Homes, Experiences, or Services if they want traditional category control.

### Hero

```text
Planning your July sea trip?

You usually start looking around now. I pulled together familiar stays, new options, experiences, and services based on your past summer trips.
```

### Input

```text
Ask Airbnb anything...
[Keyboard] [Waveform] [Draw/Lasso]
```

### Quick Chips

```text
Do what I did last year
Same trip, but better
Somewhere new
Quieter this year
Lower budget
Better for remote work
Add family activities
Review last trip
```

### Adaptive Canvas Cards

Examples:

#### Past Favorite Home

**Casa Mare, Croatia**  
Stayed here twice  
Quiet, near water, strong Wi-Fi  

Actions:

- Check July availability
- Find similar

#### New Match

**Quiet Seaside Loft, Portugal**  
Similar to your Croatia stays, but less expensive  

Actions:

- Show me
- More like this

#### Experience

**Coastal Food Walk**  
Similar to food experiences you booked on past summer trips  

#### Service

**Airport Pickup + Grocery Delivery**  
Used on your last July trip  

---

## 10. Root User Flow and Five Branches

All branches begin from the same root.

```text
ROOT:
Returning user opens Airbnb in April
↓
AI detects likely July seaside trip intent
↓
Adaptive Trip Canvas appears
↓
User chooses how to steer the trip
```

### Branch 1: Repeat Last Year

User chooses:

> Do what I did last year.

Flow:

1. Airbnb reconstructs last year's trip pattern.
2. Shows same or similar home.
3. Shows similar experience.
4. Shows services used last year.
5. Checks availability.
6. Lets user rebook or swap parts.

End state:

> Ready-to-book repeat trip.

Backend dependencies:

- Historical purchase data
- Past trip graph
- Availability service
- Service/experience matching
- Trip reconstruction logic

See backend spec: [Frontend Flow Mapping](./02_Backend_Tech_Spec_User_Travel_Memory_GraphRAG.md#13-frontend-flow-to-backend-capability-mapping)

### Branch 2: Same Trip, But Better

User chooses:

> Same trip, but better.

Then selects:

> Quieter this year.

Flow:

1. Trip Brief keeps core pattern: July, seaside, similar duration.
2. Trip Brief adds improvement: quieter, less touristy, better sleep.
3. Canvas regenerates homes, experiences, and services.
4. Each result explains why it changed.

End state:

> Improved regenerated trip canvas.

Backend dependencies:

- User Travel Memory
- Behavioral analytics
- Quietness/review extraction
- Vector retrieval
- Ranking with reason codes

### Branch 3: Focus on One Home and Give Visual Feedback

User taps a home.

Flow:

1. App enters Focus Mode.
2. Listing detail surfaces personalized evidence first.
3. User jumps to bathroom, balcony, workspace, Wi-Fi, or reviews.
4. User circles image regions and gives spoken feedback.
5. AI updates the Trip Brief.
6. Canvas regenerates homes matching visual and semantic preferences.

End state:

> New homes generated from image-level preferences.

Backend dependencies:

- Photo metadata
- Multimodal embeddings
- Image region understanding
- User inspection analytics
- Vector search over image attributes
- Trip Brief update service

### Branch 4: Circle Multiple Items to Build a Trip Bundle

User circles:

- Home
- Experience
- Service

Then says:

> Build the trip around these.

Flow:

1. AI identifies selected cards.
2. Converts them into a bundle candidate.
3. Checks compatibility, availability, schedule, and budget.
4. Generates a bundle summary.
5. Lets user compare or save the bundle.

End state:

> AI-built home + experience + service trip option.

Backend dependencies:

- Canvas state
- Selection layer
- Entity graph
- Compatibility checks
- Bundle generation logic
- Availability and schedule services

### Branch 5: Review and Remix Itinerary

User chooses:

> Review last trip.

Flow:

1. Airbnb opens the previous trip day by day.
2. User edits activities, timing, services, or rhythm.
3. AI updates the itinerary.
4. System checks availability and conflicts.
5. New trip plan appears.

End state:

> Remixed day-by-day itinerary.

Backend dependencies:

- Past trip reconstruction
- Itinerary model
- Availability/calendar checks
- Experience/service scheduling
- LLM orchestration

---

## 11. What Makes This AI-Native

This experience is AI-native because:

- The app starts from predicted intent, not blank search
- The home screen is generated from long-term user memory
- The user can steer the app conversationally and visually
- The Trip Brief continuously updates
- Recommendations are explained
- Listing details are personalized
- Homes, experiences, and services are composed into trips
- The app remembers behavior, not just bookings
- The user can remix past trips and generate new variations

---

## 12. Technical Foundation Summary

This PRD assumes a backend system that can understand a user's long-term travel behavior and generate a live canvas from it.

At a high level, the backend requires:

- Structured data in Postgres
- Historical user behavioral analytics
- Event tracking and feature extraction
- User Travel Memory
- Embeddings for listings, reviews, experiences, services, and image captions
- Vector search for semantic similarity
- Knowledge graph / trip graph
- GraphRAG retrieval for explanations and relationship reasoning
- Recommendation and ranking layer
- Multimodal understanding for photo feedback
- LLM orchestration for conversation and Trip Brief updates
- Canvas state API for the frontend

The backend architecture is detailed in:

[02_Backend_Tech_Spec_User_Travel_Memory_GraphRAG.md](./02_Backend_Tech_Spec_User_Travel_Memory_GraphRAG.md)

---

## 13. Privacy and Trust

This product is deeply personalized, so trust must be designed into the experience.

Requirements:

- User can view and edit Travel Memory.
- User can disable personalization.
- User can delete stored preference signals.
- AI explanations should be helpful, not creepy.
- Avoid exposing raw behavioral tracking.
- Use phrases like “Based on your past summer trips…”
- Avoid phrases like “You spent 4 minutes reading Wi-Fi reviews last year.”
- Use only relevant travel behavior.
- Provide clear controls for memory and personalization.

The system should expose derived preferences, not raw surveillance-like analytics.

Good:

> Based on your past summer trips, I prioritized quiet coastal homes with strong Wi-Fi and balcony views.

Bad:

> You opened 19 balcony photos and spent 4 minutes on Wi-Fi reviews.

---

## 14. Prototype Scope

For the take-home task, the prototype does not need a real backend.

The Figma / coded mockup should show:

1. Root Adaptive Trip Canvas
2. Repeat last year flow
3. Same trip but better flow
4. Focus Mode on one home
5. Visual Feedback Mode
6. Circle-to-bundle interaction
7. Itinerary remix mode
8. Regenerated canvas after feedback

All data can be mocked.

The goal is to communicate:

> Airbnb's AI-native home screen generates a personalized trip-planning surface from user memory and lets the user reshape it through conversation, gestures, and feedback.

---

## 15. Open Questions

- How much personalization should be visible before it feels creepy?
- Should the app ask permission before using long-term behavioral memory?
- How much of the Trip Brief should be editable?
- Should Homes / Experiences / Services remain as tabs, or become filters inside the canvas?
- How should the app explain confidence?
- How should contradictory preferences be resolved?
- How should the app separate temporary trip intent from long-term preference?
- How should this experience work for new users with no history?

---

## 16. Success Criteria

The design succeeds if evaluators understand:

- The user is not starting from blank search.
- The app has inferred likely seasonal trip intent.
- Homes, experiences, and services are composed together.
- The user can steer the system through multiple interaction styles.
- The Trip Brief is the central AI object.
- The UI remains familiar, even though the behavior is AI-native.
- The backend concept is plausible because it is grounded in historical analytics, user memory, retrieval, ranking, and GraphRAG.

---

## 17. One-Sentence Concept

Airbnb's AI-native home screen becomes an Adaptive Trip Canvas where returning users can remix past trips, inspect homes through personalized data, mark up what they like or dislike, and regenerate homes, experiences, services, or full itineraries around a live Trip Brief.
