---
name: lesson-writer
description: |
  Create comprehensive educational lessons for Physical AI Humanoid Robotics Textbook.
  This skill should be used when users ask to write lessons, create lesson content,
  generate educational content, write chapters, or develop course materials for
  the robotics textbook project.
allowed-tools: Read, Grep, Glob, Write, Edit, WebSearch, WebFetch, Task
---

# Lesson Writer

Create production-grade educational lessons for the Physical AI Humanoid Robotics Textbook.

## What This Skill Does

- Writes comprehensive lessons following the course structure
- Researches topics using web search and official documentation
- Creates content for all audience levels (beginner to professional)
- Includes code snippets, exercises, quizzes, and visual diagrams
- Follows chapter-sequential prerequisite structure
- Outputs structured markdown files for Docusaurus

## What This Skill Does NOT Do

- Generate images (use image-generator skill for visual assets)
- Modify course structure or folder hierarchy
- Create entire modules at once (lessons are created individually)
- Skip research phase (always researches before writing)

---

## Before Implementation

Gather context to ensure successful implementation:

| Source | Gather |
|--------|--------|
| **Context Files** | Read the three mandatory context files (see below) |
| **Conversation** | User's specific lesson requirements, module/chapter target |
| **Skill References** | Lesson patterns, templates, pedagogy guidelines |
| **Existing Lessons** | Check for sibling lessons for consistency and prerequisites |

Ensure all required context is gathered before implementing.

---

## Mandatory Context Files

**ALWAYS read these files first:**

```
docs/project/folder_structure.md
docs/project/course_structure.md
docs/project/COURSE_DETAILS.md
```

These files provide:
- Complete course hierarchy (7 modules, 34 chapters, 150+ lessons)
- Hardware requirements and technology stack
- Learning outcomes and target audience
- Lesson naming conventions and file paths

---

## Required Clarifications

Ask about USER'S specific requirements:

1. **Target Lesson**: "Which lesson do you want to write?"
   - Provide module name, chapter name, and lesson name
   - Or specify by path (e.g., "Module 1, Chapter 1, Lesson 1")

2. **Depth Level**: "What depth level for this lesson?"
   - Overview (conceptual, beginner-friendly)
   - Technical (code examples, equations)
   - Academic (citations, references)
   - Progressive (starts simple, builds depth)

3. **Special Requirements**: "Any specific requirements?"
   - Code language preference (Python/C++)
   - Exercise types (hands-on/reading/quiz)
   - External resources to include
   - Word count target

---

## Workflow

### Phase 1: Context Gathering

1. Read the three mandatory context files
2. Identify lesson position in course hierarchy
3. Check for prerequisite lessons (chapter sequential)
4. Identify sibling lessons for consistency

### Phase 2: Topic Research

1. **Official Documentation** (priority)
   - ROS 2 docs (docs.ros.org)
   - NVIDIA Isaac docs (developer.nvidia.com/isaac-sim)
   - Gazebo docs (gazebosim.org)
   - Unity robotics (unity.com/unity-for-industry/robotics)

2. **Academic Sources**
   - arXiv papers on humanoid robotics
   - IEEE publications
   - Research lab publications (MIT, Stanford, etc.)

3. **Industry Resources**
   - Unitree documentation
   - NVIDIA blogs and tutorials
   - Community forums and tutorials

4. **Use Task agent for parallel research** when topic requires multiple sources

### Phase 3: Lesson Planning

Create a lesson outline with:

```markdown
## Lesson Outline: [Lesson Title]

### Prerequisites
- [Previous lesson in chapter]

### Learning Objectives
- [What students will learn]

### Content Structure
1. Introduction (5-10% of content)
2. Core Concepts (40-50% of content)
3. Technical Deep-Dive (20-30% of content)
4. Hands-On Exercise (15-20% of content)
5. Quiz/Assessment (5-10% of content)
6. Summary & Next Steps (5%)

### Code Examples
- [List planned code snippets]

### Exercises
- [List planned exercises]

### Visual Diagrams
- [List diagrams needed - note: use image-generator skill]

### References
- [Sources from research]
```

### Phase 4: Content Writing

Write the lesson following the template structure (see `assets/lesson-template.md`):

**Frontmatter Requirements:**

All lessons MUST include the following frontmatter fields:
```yaml
---
title: [Lesson Title]
description: [Brief description for SEO and previews]
sidebar_position: [Lesson number - e.g., 1, 2, 3]
---
```

The `sidebar_position` field must match the lesson number within its chapter (e.g., if it's the 2nd lesson in a chapter, use `sidebar_position: 2`).

**Content Elements:**

| Element | Purpose | Length |
|---------|---------|--------|
| Introduction | Hook, context, objectives | 150-300 words |
| Core Concepts | Main teaching content | Variable |
| Technical Deep-Dive | Code, equations, implementation | Variable |
| Exercises | Hands-on practice | 2-4 exercises |
| Quiz | Self-assessment | 5-10 questions |
| Summary | Key takeaways | 100-200 words |

**Callout Types:**

```markdown
:::tip
Practical advice and best practices
:::

:::note
Important information to remember
:::

:::warning
Common pitfalls and safety considerations
:::

:::info
Additional context or references
:::
```

### Phase 5: Quality Validation

Verify lesson against checklist before finalizing.

---

## Depth Progression by Module

| Module | Depth Level | Audience Focus |
|--------|-------------|----------------|
| Module 0 | Beginner/Setup | All audiences |
| Module 1 | Overview/Conceptual | Beginners |
| Module 2 | Technical | Developers |
| Module 3 | Technical | Developers |
| Module 4 | Advanced | Graduate/Professionals |
| Module 5 | Advanced | Graduate/Professionals |
| Module 6 | Expert | Professionals |
| Module 7 | Advanced | All audiences |

---

## Code Snippet Guidelines

### Python (Primary)
```python
# Always include imports
import rclpy
from rclpy.node import Node

# Include comments explaining key lines
def main():
    rclpy.init()  # Initialize ROS 2
    # ... rest of code
```

### C++ (When Appropriate)
```cpp
#include <rclcpp/rclcpp.hpp>

// Include explanatory comments
int main(int argc, char **argv) {
    rclcpp::init(argc, argv);  // Initialize ROS 2
    // ... rest of code
}
```

### Code Block Requirements
- Complete, runnable examples (not fragments)
- Clear comments for key operations
- Error handling where appropriate
- Output examples when relevant

---

## Exercise Guidelines

### Exercise Types

| Type | Use When | Format |
|------|----------|--------|
| Hands-On | Practical skills | Step-by-step with expected output |
| Reading | Conceptual understanding | Questions based on documentation |
| Quiz | Knowledge check | Multiple choice with explanations |
| Project | Integration | Multi-step with deliverables |

### Exercise Structure
```markdown
## Exercise: [Title]

**Objective**: [What students will accomplish]

**Prerequisites**: [What they need before starting]

**Steps**:
1. [First step]
2. [Second step]
...

**Expected Output**:
[What success looks like]

**Hints**:
<details>
<summary>Click for hints</summary>

[Hints without giving away solution]
</details>

**Solution**:
<details>
<summary>Click for solution</summary>

[Complete solution]
</details>
```

---

## Quiz Guidelines

### Question Format
```markdown
## Quiz: [Topic]

**Question 1**: [Question text]

- [ ] Option A
- [ ] Option B
- [ ] Option C
- [ ] Option D

<details>
<summary>Answer & Explanation</summary>

**Correct Answer**: [Letter]

**Explanation**: [Why this is correct and others are wrong]
</details>
```

### Quiz Requirements
- 5-10 questions per lesson
- Mix of conceptual and practical
- Always include explanations
- Cover key learning objectives

---

## Visual Diagram Guidelines

**Note**: This skill describes needed diagrams but does NOT generate them.

### Diagram Request Format
When a diagram is needed, create a prompt file for the image-generator skill:

```markdown
## Visual Needed: [Diagram Name]

**Lesson**: [Current lesson path]
**Type**: [Architecture/Flowchart/Diagram/Graph]
**Purpose**: [What concept it illustrates]
**Complexity**: [Simple/Medium/Complex]

**Description**:
[Detailed description of what the diagram should show]

**Labels Needed**:
- [Label 1]
- [Label 2]

**Style**: Technical/Educational
```

Save prompt to: `docs/visual-prompts/[lesson-path]-[diagram-name].md`

Then invoke image-generator skill separately.

---

## Content Revision & Reinforcement

**CRITICAL**: Every lesson must actively reference and reinforce previous content.

### Revision at Lesson Start

Always begin lessons with a brief review of what has been studied so far:

```markdown
## What We've Learned So Far

Before diving into this lesson, let's recap our journey:

**In previous chapters**, we explored:
- **Chapter 1**: [Brief summary of what was covered]
- **Chapter 2**: [Brief summary of what was covered]

**In this chapter so far**, we've learned:
- **Lesson 1**: [Brief summary]
- **Lesson 2**: [Brief summary]
```

### In-Content References

When introducing concepts that build on previous content, use these reference patterns with proper links:

**Referencing a specific lesson:**
```markdown
As we studied in [Lesson 1: Introduction to ROS 2](../chap-01-introduction-to-ros/1-introduction-to-ros2), [concept] forms the
foundation for what we'll explore today.
```

**Referencing an entire chapter:**
```markdown
As we learned in [Chapter 2: Robotic Nervous System](../chap-02-robotic-nervous-system), [topic] provides the theoretical
framework for understanding [current topic].
```

**Referencing a previous module:**
```markdown
Building on the ROS 2 fundamentals we covered in [Module 1: Introduction to Physical AI](../module-01-introduction-to-physical-ai),
we can now apply these concepts to humanoid robotics.
```

### Proper Linking Examples for Docusaurus

When creating links in the frontend/docs structure, use these patterns:

**Links within the same chapter:**
```markdown
[Lesson 2](./2-advanced-topics)
```

**Links to lessons in other chapters:**
```markdown
[Lesson 1: Getting Started](../chap-01-getting-started/1-getting-started)
```

**Links to chapters:**
```markdown
[Chapter 3: Digital Twin](../chap-03-digital-twin)
```

**Links to modules:**
```markdown
[Module 2: Robotic Nervous System](../module-02-robotic-nervous-system)
```

### When to Reference Previous Content

| Situation | Reference Pattern |
|-----------|-------------------|
| Building on a concept | "As we studied in [Lesson X of Chapter Y](../chap-01-introduction-to-ros/1-introduction-to-ros2)..." |
| Summarizing prerequisites | "As we learned in [Chapter X](../chap-02-robotic-nervous-system)..." |
| Connecting topics across modules | "Building on what we covered in [Module 1](../module-01-introduction-to-physical-ai)..." |
| Reinforcing foundational knowledge | "Recall from [Lesson X](../chap-01-introduction-to-ros/1-introduction-to-ros2) that..." |
| Comparing approaches | "Unlike the method we saw in [Lesson X](../chap-01-introduction-to-ros/1-introduction-to-ros2)..." |

### Revision Questions

Include 1-2 quick review questions at the start of lessons:

```markdown
### Quick Review

Before we proceed, test your recall:

1. In [Lesson X], what did we establish about [concept]?
2. How does [concept from Chapter Y] relate to what we're learning today?

<details>
<summary>Check your understanding</summary>

1. [Brief answer]
2. [Brief answer connecting concepts]
</details>
```

### Chapter Summary References

At the end of each chapter's final lesson, include a chapter summary:

```markdown
## Chapter Summary

In this chapter, we covered:

1. **Lesson 1**: [Concept and key takeaway]
2. **Lesson 2**: [Concept and key takeaway]
3. **Lesson 3**: [Concept and key takeaway]
4. **Lesson 4**: [Concept and key takeaway]

These concepts build upon [previous chapter/module] and prepare us for
[next chapter], where we will explore [upcoming topic].
```

---

## Prerequisites Handling

### Chapter Sequential Structure

Lessons build on previous lessons within a chapter:

```markdown
## Prerequisites

Before starting this lesson, you should have completed:

- [Previous Lesson Name](../previous-lesson-path)
- [Understanding Required]

This lesson assumes you understand:
- [Concept 1]
- [Concept 2]
```

### Module-Level Prerequisites

Some lessons require knowledge from previous modules:

```markdown
### Required Knowledge

This lesson builds on concepts from:
- [Module X, Chapter Y](/docs/module-x/chapter-y)
```

---

## File Naming Convention

Follow the established pattern:

```
frontend/docs/module-{N}-{module-name}/
├── index.md
├── chap-{M}-{chapter-name}/
│   ├── index.md
│   ├── 1-{lesson-name}.md
│   ├── 2-{lesson-name}.md
│   └── ...
```

**Naming Rules:**
- Use kebab-case for all names
- Number lessons sequentially within chapter
- Use descriptive lesson names (not generic)
- Match folder_structure.md exactly

---

## Output Checklist

Before delivering a lesson, verify:

### Content Quality
- [ ] Learning objectives clearly stated
- [ ] Content matches depth level for module
- [ ] All code snippets are complete and runnable
- [ ] Exercises have clear objectives and solutions
- [ ] Quiz questions cover key learning objectives
- [ ] Summary reinforces main points
- [ ] **Revision section included at lesson start**
- [ ] **Previous lessons/chapters referenced with proper links**
- [ ] **In-content references use correct patterns ("As we studied in Lesson X of Chapter Y...")**

### Structure
- [ ] Prerequisites section included
- [ ] Follows lesson template structure
- [ ] Callouts used appropriately (tip, note, warning)
- [ ] Headings hierarchy is correct (H2, H3, H4)
- [ ] Internal links work correctly

### Technical Accuracy
- [ ] Code examples tested or verified against documentation
- [ ] Technical terms defined on first use
- [ ] External links point to official documentation
- [ ] Version-specific information noted (ROS 2 Humble, etc.)

### Consistency
- [ ] Matches style of sibling lessons
- [ ] Uses same terminology as previous lessons
- [ ] File name matches folder_structure.md
- [ ] Cross-references to other lessons are accurate

### Docusaurus Compatibility
- [ ] Valid markdown syntax
- [ ] Frontmatter included with title, description, and sidebar_position
- [ ] sidebar_position matches lesson number in chapter (e.g., 1, 2, 3)
- [ ] Images use correct path format
- [ ] Code blocks specify language

---

## Reference Files

| File | When to Read |
|------|--------------|
| `references/pedagogy-patterns.md` | For teaching methodology guidance |
| `references/ros2-patterns.md` | When writing ROS 2 content |
| `references/isaac-patterns.md` | When writing NVIDIA Isaac content |
| `references/gazebo-patterns.md` | When writing Gazebo simulation content |
| `assets/lesson-template.md` | When starting new lesson |

---

## Anti-Patterns

**Never:**
- Skip reading the three mandatory context files
- Write without researching the topic first
- Create lessons that skip chapter prerequisites
- Use code snippets that are incomplete or untested
- Copy content without attribution or verification
- Generate images directly (use image-generator skill)

**Even if it seems reasonable:**
- Don't assume you know the topic without research
- Don't skip the lesson planning phase
- Don't use different terminology than previous lessons
- Don't create lessons out of chapter sequence
