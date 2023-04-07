const FOCUSABLE_ELEMENTS = [
    "a[href]",
    "area[href]",
    'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
    "select:not([disabled]):not([aria-hidden])",
    "textarea:not([disabled]):not([aria-hidden])",
    "button:not([disabled]):not([aria-hidden])",
    "iframe",
    "object",
    "embed",
    "[contenteditable]",
    '[tabindex]:not([tabindex^="-"])'
  ];

  const main = document.getElementById("main");
  const dialog = document.getElementById("dialog");
  const openTriggers = [
    ...document.querySelectorAll(`*[data-open-trigger="dialog"]`)
  ];
  const closeTriggers = [
    ...document.querySelectorAll(`*[data-close-trigger="dialog"]`)
  ];
  const focusableElements = [
    ...dialog.querySelectorAll(FOCUSABLE_ELEMENTS.join(","))
  ];
  let focusBeforeElement = null;

  const handleDialogOpen = () => {
    if (!dialog.classList.contains("__hidden")) return;

    dialog.classList.remove("__hidden");
    focusBeforeElement = document.activeElement;
    focusableElements[0].focus();

    bgScrollBehavior("fix");
    noSelectContents(true);

    main.setAttribute("aria-hidden", "true");
  };
  const handleDialogClose = () => {
    if (dialog.classList.contains("__hidden")) return;

    dialog.classList.add("__hidden");
    focusBeforeElement.focus();
    focusBeforeElement = null;

    bgScrollBehavior("scroll");
    noSelectContents(false);

    main.setAttribute("aria-hidden", "false");
  };
  const handleKeydownDiaogContainer = (e) => {
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];

    if (e.code === "Tab") {
      if (e.shiftKey) {
        if (document.activeElement === firstFocusableElement) {
          e.preventDefault();
          lastFocusableElement.focus();
        }
      } else {
        if (document.activeElement === lastFocusableElement) {
          e.preventDefault();
          firstFocusableElement.focus();
        }
      }
    }
    if (e.code === "Escape") {
      handleDialogClose();
    }
  };

  const bgScrollBehavior = (state) => {
    const isFixed = state === "fix";

    if (isFixed) {
      const scrollY = document.documentElement.scrollTop;
      document.body.classList.add("fixed");
      document.documentElement.style.setProperty(
        "--scroll-y",
        `${scrollY * -1}px`
      );
    } else {
      const scrollY = parseInt(
        document.documentElement.style.getPropertyValue("--scroll-y") || "0"
      );
      document.body.classList.remove("fixed");
      window.scrollTo(0, scrollY * -1);
    }
  };

  const noSelectContents = (bool) => {
    if (bool) {
      main.classList.add("user-select-none");
    } else {
      main.classList.remove("user-select-none");
    }
  };

  openTriggers.forEach((trigger) => {
    trigger.addEventListener("click", handleDialogOpen);
  });
  closeTriggers.forEach((trigger) => {
    trigger.addEventListener("click", handleDialogClose);
  });
  dialog.addEventListener("keydown", handleKeydownDiaogContainer);



