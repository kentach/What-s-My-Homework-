document.addEventListener("turbo:load", () => {
  const tabs = document.querySelectorAll(".my-tasks-tab");
  const panels = document.querySelectorAll(".tab-panel");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      panels.forEach((p) => p.classList.remove("active"));

      tab.classList.add("active");

      const panel = document.getElementById(`panel-${tab.dataset.tab}`);
      if (panel) panel.classList.add("active");
    });
  });

  function updateCounts() {
    const incomplete = document.querySelectorAll(
      "#panel-incomplete .task-item:not(.completed)"
    ).length;

    const complete = document.querySelectorAll(
      "#panel-complete .task-item.completed"
    ).length;

    const ib = document.getElementById("incompleteCount");
    const cb = document.getElementById("completeCount");

    if (ib) ib.textContent = incomplete;
    if (cb) cb.textContent = complete;
  }

  updateCounts();

  document.addEventListener("turbo:frame-render", updateCounts);
});