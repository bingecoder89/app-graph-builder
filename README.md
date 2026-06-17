# App Graph Builder

A ReactFlow-based application graph builder that allows users to visualize, inspect, and manage application graphs through an interactive canvas and inspector panel.

## Tech Stack

- React
- Vite
- TypeScript
- ReactFlow (@xyflow/react)
- Zustand
- TanStack Query
- Tailwind CSS
- shadcn/ui

---

## Features

### Layout

- Top navigation bar
- Left navigation rail
- Application list panel
- ReactFlow canvas
- Node inspector panel
- Responsive layout for smaller screens

### Graph Canvas

- Render graph nodes and edges using ReactFlow
- Node selection
- Node movement and positioning
- Node deletion
- Dotted canvas background

### Node Inspector

- Displays selected node information
- Editable node label
- Config / Runtime tabs
- Slider and numeric input synchronization
- Status badge display

### State Management

- Zustand store for:
  - Selected application
  - Selected node
  - Graph nodes
  - Graph edges

### Data Fetching

- TanStack Query for application data
- TanStack Query for graph data
- Loading state handling with spinner UI

---

---

## Project Structure

```text
src
│
├── api
├── components
│   ├── Layout
│   ├── LeftRail
│   ├── AppList
│   ├── Canvas
│   ├── NodeInspector
│   ├── RightPanel
│   └── ui
│
├── mocks
├── store
├── lib
└── types
```

---

## Setup Instructions

### 1. Clone Repository

```bash
git clone <repository-url>
cd app-graph-builder
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

### 4. Production Build

```bash
npm run build
```

---

## Key Decisions

### Zustand for Shared State

Used Zustand to manage shared application state such as:

- Selected application
- Selected node
- Graph nodes
- Graph edges

This avoids unnecessary prop drilling and keeps state access simple across components.

### TanStack Query for Data Fetching

Used TanStack Query to:

- Manage asynchronous data fetching
- Handle loading states
- Cache application data
- Cache graph data

### ReactFlow for Graph Visualization

ReactFlow was chosen because it provides:

- Node and edge management
- Selection support
- Drag interactions
- Graph visualization utilities

### Component Separation

The application is split into focused components:

- LeftRail
- AppList
- Canvas
- NodeInspector
- RightPanel

This keeps responsibilities clear and improves maintainability.

---

## Known Limitations

### Mock Data Source

Application and graph data are currently served from local mock files instead of a backend API.

### Limited Node Editing

Only node label editing is supported.

### No Persistence

Changes made to graph data are not persisted after page refresh.

### Error Handling

Basic loading state support is implemented. Production-grade error handling and retry flows are not included.

### TypeScript Improvements

Some areas can be further improved with stricter TypeScript typing and type definitions.

---

## Future Improvements

- Backend integration
- Persistent graph storage
- Edge creation and deletion
- Undo / Redo support
- Advanced filtering and search
- Stronger TypeScript coverage
- Enhanced error handling

---

## Evaluation Requirements Covered

✅ Component separation

✅ Zustand state management

✅ ReactFlow integration

✅ Application selection

✅ Node selection

✅ Node deletion

✅ Editable node labels

✅ Loading state support

✅ Responsive layout

---

## Author

Ankit Bal
