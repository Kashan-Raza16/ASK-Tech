# ASK-Tech: Complete Tech Solution

## About Us
We are providing a complete tech solution, offering robust platforms such as:
- **E-Commerce Websites**
- **Wedding Websites**
- **Business Websites**
- **Other Custom Projects**

### Contract Details
- **Duration**: 1 June to 30 August
- **Team Members**:
  - Adityam Kumar Singh
  - Suraj Kumar
  - Kashan Raza Hashmin

We are committed to delivering high-quality projects under a three-month contract.

---

# HeroSection Component

## Overview
The `HeroSection` React component creates a dynamic hero section with:
- A welcoming message
- Interactive animations powered by **GSAP** (GreenSock Animation Platform) and its **ScrollTrigger** plugin.

These animations are activated as the user scrolls, offering a visually engaging experience.

---

## Key Features
1. **Welcome Message**:
   - Displays a prominent welcome message and a clear call to action.
2. **GSAP Animations**:
   - Animates various image elements (`whiteCube`, `PinkCube`, and `ball`) based on the user's scroll position.
3. **ScrollTrigger Integration**:
   - Precisely controls when and how the animations play out as the user navigates the page.
4. **Responsive Design**:
   - Adapts seamlessly across different screen sizes.

---

## Dependencies
The `HeroSection` component relies on the following libraries:
- **react**: The foundational JavaScript library for building user interfaces.
- **gsap**: The GreenSock Animation Platform, known for its high-performance animations.
- **gsap/dist/ScrollTrigger**: A specific plugin from GSAP that enables scroll-based animations.

---

## Assets Used
The component utilizes several image assets for its visual elements:
- `Ball1.png`: Used for the animated ball.
- `PINK-CUBE.png`: Represents the pink cube.
- `CUBE WHITE.png`: Used for the white cubes.

---

## Component Overview
The `HeroSection` component's core functionality is encapsulated within its `useEffect` hook, which manages the GSAP animation logic. Each animation targets a specific CSS class (e.g., `.WhiteCube1`, `.ball`) and defines its behavior in relation to the scroll position.

---

## Animation Properties
The animations share several common properties:
- **`y`**: Controls vertical movement.
- **`x`**: Controls horizontal movement.
- **`duration`**: Specifies the length of the animation in seconds.
- **`ease`**: Determines the animation's speed curve, influencing its flow.
- **`scrollTrigger`**: Configures how the animation is triggered by scrolling:
  - **`trigger`**: The element that initiates the animation.
  - **`start`**: Defines the scroll position where the animation begins, relative to the trigger and the viewport.
  - **`end`**: Defines the scroll position where the animation concludes.
  - **`scrub`**: Links the animation's progress directly to the scroll position. A value of `2`, for example, means the animation will follow the scroll by a 2-second delay.

---

## Specific Animations
- **`.WhiteCube1`**: Moves upward by 10 pixels.
- **`.WhiteCube2`**: Moves left by 25 pixels.
- **`.WhiteCube3`**: Moves right by 25 pixels.
- **`.WhiteCube4`**: Moves upward by 90 pixels.
- **`.ball`**: Moves upward by 75 pixels.

All these animations are set to begin when the `.animation-container` element's top edge reaches 48% of the viewport and conclude when it reaches 70%.

---

## Styling
The component's styling is managed using Tailwind CSS classes. Notable styles include:
- **`Container`**: Provides a full-width wrapper.
- **`Home`**: Sets a dark gray background, centers content, and uses relative positioning for its absolute child elements.
- **`left-content`**: Absolutely positioned to the left, housing the welcome message and interactive button.
- **`animation-container`**: Acts as a parent container for all the animated image elements.
- **`.WhiteCube1`, `.WhiteCube2`, `.WhiteCube3`, `.WhiteCube4`, `.ball`**: These classes define the absolute positioning (using `top` and `right` values) and specific width for each animated image within the `animation-container`.

---

## Filepath
```plaintext
[HeroSection.jsx](http://_vscodecontentref_/1)
```