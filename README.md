# Accessibility and performance testing
The code in this repository is a simple static webpage. The purpose of the repository is to demonstrate critical areas of consideration for both accessibility and performatince testing in a stripped down and easy to understand project. All code in this repository is contained in the `main` branch.

# How to use this repository
Follow the activity directions below. Ideally try to complete the work with a peer. Choose whichever task (or tasks) you would like to try to completed in the **Peformance Optimization** section.

## Performance Audit (15 min)
- Individual Task:
    - Each student runs a Lighthouse performance audit on the provided project via Chrome DevTools.
    - Students will identify critical performance issues (e.g., large images, slow initial loading time, excessive JavaScript).
    - Analyze key performance metrics (First Contentful Paint, Time to Interactive, Largest Contentful Paint).
- Group Discussion:
    - Break into groups to share results. What were the common performance bottlenecks? What improvements could be made?

## Performance Optimization (15 min)
- Individual Task:
    - Students are tasked with addressing at least one major performance issue.
    - Examples:
        - Compress large images using an online tool.
        - Remove or defer unnecessary JavaScript to reduce blocking.
        - Implement lazy loading for images.
        - Advanced students can experiment with advanced optimization techniques (e.g., minifying CSS and JS, setting cache headers).
- Group Discussion:
    - Share optimizations applied and compare performance scores before and after the changes.

## Rerun Performance Test and Analyze (10 min)
- Individual Task:
    - Rerun the Lighthouse performance audit after applying optimizations.
    - Compare scores before and after. Did FCP, LCP, and TTI improve? If not, why?
- Group Debrief:
    - Groups discuss which optimizations had the biggest impact and what further improvements could be made.
    - Discuss how performance testing fits into the broader QA process and how even small optimizations can drastically improve user experience.
