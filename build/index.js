var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// src/app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { RemixServer } from "@remix-run/react";
import { renderToString } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = renderToString(
    /* @__PURE__ */ jsxDEV(RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "src/app/entry.server.tsx",
      lineNumber: 12,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// src/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from "@remix-run/react";

// src/app/components/ui/sonner.tsx
import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var Toaster = ({ ...props }) => {
  let { theme = "system" } = useTheme();
  return /* @__PURE__ */ jsxDEV2(
    Sonner,
    {
      theme,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    },
    void 0,
    !1,
    {
      fileName: "src/app/components/ui/sonner.tsx",
      lineNumber: 10,
      columnNumber: 5
    },
    this
  );
};

// src/app/components/layout/SidebarProvider.tsx
import { createContext, useContext, useState } from "react";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var SidebarContext = createContext(void 0);
function SidebarProvider({ children }) {
  let [isOpen, setIsOpen] = useState(!0), toggle = () => setIsOpen(!isOpen);
  return /* @__PURE__ */ jsxDEV3(SidebarContext.Provider, { value: { isOpen, toggle }, children }, void 0, !1, {
    fileName: "src/app/components/layout/SidebarProvider.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// src/app/integrations/supabase/client.ts
import { createClient } from "@supabase/supabase-js";
var SUPABASE_URL = "https://psvvyjhkqdmkwwcfzntj.supabase.co", SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBzdnZ5amhrcWRta3d3Y2Z6bnRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI3NzAzNDUsImV4cCI6MjA1ODM0NjM0NX0.QHvC2fSiMZ9otuWJbr1m2Lo-K_eblCJqRGv4YMWQK2o", supabase = createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);

// src/app/root.tsx
import { redirect } from "@remix-run/node";

// src/app/styles/global.css
var global_default = "/build/_assets/global-O3I4IXV7.css";

// src/app/root.tsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var links = () => [
  { rel: "stylesheet", href: global_default }
];
async function loader({ request }) {
  let { data: { session } } = await supabase.auth.getSession();
  return !session && !request.url.includes("/login") ? redirect("/login") : session && request.url.includes("/login") ? redirect("/") : { session };
}
function App() {
  let { session } = useLoaderData();
  return /* @__PURE__ */ jsxDEV4("html", { lang: "pt-BR", children: [
    /* @__PURE__ */ jsxDEV4("head", { children: [
      /* @__PURE__ */ jsxDEV4("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "src/app/root.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "src/app/root.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4(Meta, {}, void 0, !1, {
        fileName: "src/app/root.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4(Links, {}, void 0, !1, {
        fileName: "src/app/root.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "src/app/root.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV4("body", { className: "min-h-screen bg-background font-sans antialiased", children: [
      /* @__PURE__ */ jsxDEV4(SidebarProvider, { children: /* @__PURE__ */ jsxDEV4("div", { className: "relative flex min-h-screen flex-col", children: [
        /* @__PURE__ */ jsxDEV4(Outlet, {}, void 0, !1, {
          fileName: "src/app/root.tsx",
          lineNumber: 51,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV4(Toaster, {}, void 0, !1, {
          fileName: "src/app/root.tsx",
          lineNumber: 52,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "src/app/root.tsx",
        lineNumber: 50,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "src/app/root.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4(ScrollRestoration, {}, void 0, !1, {
        fileName: "src/app/root.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4(Scripts, {}, void 0, !1, {
        fileName: "src/app/root.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4(LiveReload, {}, void 0, !1, {
        fileName: "src/app/root.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "src/app/root.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "src/app/root.tsx",
    lineNumber: 41,
    columnNumber: 5
  }, this);
}

// src/app/routes/orcamentos.tsx
var orcamentos_exports = {};
__export(orcamentos_exports, {
  default: () => BudgetRoute
});

// src/app/hooks/use-toast.ts
import * as React from "react";
var TOAST_LIMIT = 1, TOAST_REMOVE_DELAY = 1e6;
var count = 0;
function genId() {
  return count = (count + 1) % Number.MAX_SAFE_INTEGER, count.toString();
}
var toastTimeouts = /* @__PURE__ */ new Map(), addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId))
    return;
  let timeout = setTimeout(() => {
    toastTimeouts.delete(toastId), dispatch({
      type: "REMOVE_TOAST",
      toastId
    });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
}, reducer = (state, action2) => {
  switch (action2.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action2.toast, ...state.toasts].slice(0, TOAST_LIMIT)
      };
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === action2.toast.id ? { ...t, ...action2.toast } : t
        )
      };
    case "DISMISS_TOAST": {
      let { toastId } = action2;
      return toastId ? addToRemoveQueue(toastId) : state.toasts.forEach((toast9) => {
        addToRemoveQueue(toast9.id);
      }), {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === toastId || toastId === void 0 ? {
            ...t,
            open: !1
          } : t
        )
      };
    }
    case "REMOVE_TOAST":
      return action2.toastId === void 0 ? {
        ...state,
        toasts: []
      } : {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action2.toastId)
      };
  }
}, listeners = [], memoryState = { toasts: [] };
function dispatch(action2) {
  memoryState = reducer(memoryState, action2), listeners.forEach((listener) => {
    listener(memoryState);
  });
}
function toast({ ...props }) {
  let id = genId(), update = (props2) => dispatch({
    type: "UPDATE_TOAST",
    toast: { ...props2, id }
  }), dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
  return dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: !0,
      onOpenChange: (open) => {
        open || dismiss();
      }
    }
  }), {
    id,
    dismiss,
    update
  };
}
function useToast() {
  let [state, setState] = React.useState(memoryState);
  return React.useEffect(() => (listeners.push(setState), () => {
    let index = listeners.indexOf(setState);
    index > -1 && listeners.splice(index, 1);
  }), [state]), {
    ...state,
    toast,
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId })
  };
}

// src/app/components/ui/toast.tsx
import * as React2 from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva } from "class-variance-authority";
import { X } from "lucide-react";

// src/app/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/app/components/ui/toast.tsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var ToastProvider = ToastPrimitives.Provider, ToastViewport = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV5(
  ToastPrimitives.Viewport,
  {
    ref,
    className: cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/toast.tsx",
    lineNumber: 14,
    columnNumber: 3
  },
  this
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
var toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), Toast = React2.forwardRef(({ className, variant, ...props }, ref) => /* @__PURE__ */ jsxDEV5(
  ToastPrimitives.Root,
  {
    ref,
    className: cn(toastVariants({ variant }), className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/toast.tsx",
    lineNumber: 47,
    columnNumber: 5
  },
  this
));
Toast.displayName = ToastPrimitives.Root.displayName;
var ToastAction = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV5(
  ToastPrimitives.Action,
  {
    ref,
    className: cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/toast.tsx",
    lineNumber: 60,
    columnNumber: 3
  },
  this
));
ToastAction.displayName = ToastPrimitives.Action.displayName;
var ToastClose = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV5(
  ToastPrimitives.Close,
  {
    ref,
    className: cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    ),
    "toast-close": "",
    ...props,
    children: /* @__PURE__ */ jsxDEV5(X, { className: "h-4 w-4" }, void 0, !1, {
      fileName: "src/app/components/ui/toast.tsx",
      lineNumber: 84,
      columnNumber: 5
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/toast.tsx",
    lineNumber: 75,
    columnNumber: 3
  },
  this
));
ToastClose.displayName = ToastPrimitives.Close.displayName;
var ToastTitle = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV5(
  ToastPrimitives.Title,
  {
    ref,
    className: cn("text-sm font-semibold", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/toast.tsx",
    lineNumber: 93,
    columnNumber: 3
  },
  this
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;
var ToastDescription = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV5(
  ToastPrimitives.Description,
  {
    ref,
    className: cn("text-sm opacity-90", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/toast.tsx",
    lineNumber: 105,
    columnNumber: 3
  },
  this
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

// src/app/components/ui/toaster.tsx
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
function Toaster2() {
  let { toasts } = useToast();
  return /* @__PURE__ */ jsxDEV6(ToastProvider, { children: [
    toasts.map(function({ id, title, description, action: action2, ...props }) {
      return /* @__PURE__ */ jsxDEV6(Toast, { ...props, children: [
        /* @__PURE__ */ jsxDEV6("div", { className: "grid gap-1", children: [
          title && /* @__PURE__ */ jsxDEV6(ToastTitle, { children: title }, void 0, !1, {
            fileName: "src/app/components/ui/toaster.tsx",
            lineNumber: 20,
            columnNumber: 25
          }, this),
          description && /* @__PURE__ */ jsxDEV6(ToastDescription, { children: description }, void 0, !1, {
            fileName: "src/app/components/ui/toaster.tsx",
            lineNumber: 22,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "src/app/components/ui/toaster.tsx",
          lineNumber: 19,
          columnNumber: 13
        }, this),
        action2,
        /* @__PURE__ */ jsxDEV6(ToastClose, {}, void 0, !1, {
          fileName: "src/app/components/ui/toaster.tsx",
          lineNumber: 26,
          columnNumber: 13
        }, this)
      ] }, id, !0, {
        fileName: "src/app/components/ui/toaster.tsx",
        lineNumber: 18,
        columnNumber: 11
      }, this);
    }),
    /* @__PURE__ */ jsxDEV6(ToastViewport, {}, void 0, !1, {
      fileName: "src/app/components/ui/toaster.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "src/app/components/ui/toaster.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// src/app/components/ui/scroll-area.tsx
import * as React3 from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
var ScrollArea = React3.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDEV7(
  ScrollAreaPrimitive.Root,
  {
    ref,
    className: cn("relative overflow-hidden", className),
    ...props,
    children: [
      /* @__PURE__ */ jsxDEV7(ScrollAreaPrimitive.Viewport, { className: "h-full w-full rounded-[inherit]", children }, void 0, !1, {
        fileName: "src/app/components/ui/scroll-area.tsx",
        lineNumber: 15,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV7(ScrollBar, {}, void 0, !1, {
        fileName: "src/app/components/ui/scroll-area.tsx",
        lineNumber: 18,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV7(ScrollAreaPrimitive.Corner, {}, void 0, !1, {
        fileName: "src/app/components/ui/scroll-area.tsx",
        lineNumber: 19,
        columnNumber: 5
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "src/app/components/ui/scroll-area.tsx",
    lineNumber: 10,
    columnNumber: 3
  },
  this
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;
var ScrollBar = React3.forwardRef(({ className, orientation = "vertical", ...props }, ref) => /* @__PURE__ */ jsxDEV7(
  ScrollAreaPrimitive.ScrollAreaScrollbar,
  {
    ref,
    orientation,
    className: cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxDEV7(ScrollAreaPrimitive.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" }, void 0, !1, {
      fileName: "src/app/components/ui/scroll-area.tsx",
      lineNumber: 41,
      columnNumber: 5
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/scroll-area.tsx",
    lineNumber: 28,
    columnNumber: 3
  },
  this
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

// src/app/components/ui/sidebar.tsx
import * as React10 from "react";
import { Slot as Slot2 } from "@radix-ui/react-slot";
import { cva as cva4 } from "class-variance-authority";
import { PanelLeft } from "lucide-react";

// src/app/hooks/use-mobile.tsx
import * as React4 from "react";
var MOBILE_BREAKPOINT = 768;
function useIsMobile() {
  let [isMobile, setIsMobile] = React4.useState(void 0);
  return React4.useEffect(() => {
    let mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`), onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    return mql.addEventListener("change", onChange), setIsMobile(window.innerWidth < MOBILE_BREAKPOINT), () => mql.removeEventListener("change", onChange);
  }, []), !!isMobile;
}

// src/app/components/ui/button.tsx
import * as React5 from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva as cva2 } from "class-variance-authority";
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
var buttonVariants = cva2(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Button = React5.forwardRef(
  ({ className, variant, size, asChild = !1, ...props }, ref) => /* @__PURE__ */ jsxDEV8(
    asChild ? Slot : "button",
    {
      className: cn(buttonVariants({ variant, size, className })),
      ref,
      ...props
    },
    void 0,
    !1,
    {
      fileName: "src/app/components/ui/button.tsx",
      lineNumber: 46,
      columnNumber: 7
    },
    this
  )
);
Button.displayName = "Button";

// src/app/components/ui/input.tsx
import * as React6 from "react";
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
var Input = React6.forwardRef(
  ({ className, type, ...props }, ref) => /* @__PURE__ */ jsxDEV9(
    "input",
    {
      type,
      className: cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ref,
      ...props
    },
    void 0,
    !1,
    {
      fileName: "src/app/components/ui/input.tsx",
      lineNumber: 8,
      columnNumber: 7
    },
    this
  )
);
Input.displayName = "Input";

// src/app/components/ui/separator.tsx
import * as React7 from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
var Separator = React7.forwardRef(
  ({ className, orientation = "horizontal", decorative = !0, ...props }, ref) => /* @__PURE__ */ jsxDEV10(
    SeparatorPrimitive.Root,
    {
      ref,
      decorative,
      orientation,
      className: cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      ),
      ...props
    },
    void 0,
    !1,
    {
      fileName: "src/app/components/ui/separator.tsx",
      lineNumber: 14,
      columnNumber: 5
    },
    this
  )
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

// src/app/components/ui/sheet.tsx
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva as cva3 } from "class-variance-authority";
import { X as X2 } from "lucide-react";
import * as React8 from "react";
import { jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
var Sheet = SheetPrimitive.Root;
var SheetPortal = SheetPrimitive.Portal, SheetOverlay = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV11(
  SheetPrimitive.Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/sheet.tsx",
    lineNumber: 20,
    columnNumber: 3
  },
  this
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
var sheetVariants = cva3(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
), SheetContent = React8.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxDEV11(SheetPortal, { children: [
  /* @__PURE__ */ jsxDEV11(SheetOverlay, {}, void 0, !1, {
    fileName: "src/app/components/ui/sheet.tsx",
    lineNumber: 59,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ jsxDEV11(
    SheetPrimitive.Content,
    {
      ref,
      className: cn(sheetVariants({ side }), className),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxDEV11(SheetPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ jsxDEV11(X2, { className: "h-4 w-4" }, void 0, !1, {
            fileName: "src/app/components/ui/sheet.tsx",
            lineNumber: 67,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV11("span", { className: "sr-only", children: "Close" }, void 0, !1, {
            fileName: "src/app/components/ui/sheet.tsx",
            lineNumber: 68,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "src/app/components/ui/sheet.tsx",
          lineNumber: 66,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "src/app/components/ui/sheet.tsx",
      lineNumber: 60,
      columnNumber: 5
    },
    this
  )
] }, void 0, !0, {
  fileName: "src/app/components/ui/sheet.tsx",
  lineNumber: 58,
  columnNumber: 3
}, this));
SheetContent.displayName = SheetPrimitive.Content.displayName;
var SheetHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxDEV11(
  "div",
  {
    className: cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/sheet.tsx",
    lineNumber: 79,
    columnNumber: 3
  },
  this
);
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxDEV11(
  "div",
  {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/sheet.tsx",
    lineNumber: 93,
    columnNumber: 3
  },
  this
);
SheetFooter.displayName = "SheetFooter";
var SheetTitle = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV11(
  SheetPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold text-foreground", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/sheet.tsx",
    lineNumber: 107,
    columnNumber: 3
  },
  this
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;
var SheetDescription = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV11(
  SheetPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/sheet.tsx",
    lineNumber: 119,
    columnNumber: 3
  },
  this
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

// src/app/components/ui/skeleton.tsx
import { jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
function Skeleton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV12(
    "div",
    {
      className: cn("animate-pulse rounded-md bg-muted", className),
      ...props
    },
    void 0,
    !1,
    {
      fileName: "src/app/components/ui/skeleton.tsx",
      lineNumber: 8,
      columnNumber: 5
    },
    this
  );
}

// src/app/components/ui/tooltip.tsx
import * as React9 from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { jsxDEV as jsxDEV13 } from "react/jsx-dev-runtime";
var TooltipProvider = TooltipPrimitive.Provider, Tooltip = TooltipPrimitive.Root, TooltipTrigger = TooltipPrimitive.Trigger, TooltipContent = React9.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxDEV13(
  TooltipPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/tooltip.tsx",
    lineNumber: 16,
    columnNumber: 3
  },
  this
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

// src/app/components/ui/sidebar.tsx
import { jsxDEV as jsxDEV14 } from "react/jsx-dev-runtime";
var SIDEBAR_COOKIE_NAME = "sidebar:state", SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7, SIDEBAR_WIDTH = "16rem", SIDEBAR_WIDTH_MOBILE = "18rem", SIDEBAR_WIDTH_ICON = "3rem", SIDEBAR_KEYBOARD_SHORTCUT = "b", SidebarContext2 = React10.createContext(null);
function useSidebar() {
  let context = React10.useContext(SidebarContext2);
  if (!context)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return context;
}
var SidebarProvider2 = React10.forwardRef(
  ({
    defaultOpen = !0,
    open: openProp,
    onOpenChange: setOpenProp,
    className,
    style,
    children,
    ...props
  }, ref) => {
    let isMobile = useIsMobile(), [openMobile, setOpenMobile] = React10.useState(!1), [_open, _setOpen] = React10.useState(defaultOpen), open = openProp ?? _open, setOpen = React10.useCallback(
      (value) => {
        let openState = typeof value == "function" ? value(open) : value;
        setOpenProp ? setOpenProp(openState) : _setOpen(openState), document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
      },
      [setOpenProp, open]
    ), toggleSidebar = React10.useCallback(() => isMobile ? setOpenMobile((open2) => !open2) : setOpen((open2) => !open2), [isMobile, setOpen, setOpenMobile]);
    React10.useEffect(() => {
      let handleKeyDown = (event) => {
        event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey) && (event.preventDefault(), toggleSidebar());
      };
      return window.addEventListener("keydown", handleKeyDown), () => window.removeEventListener("keydown", handleKeyDown);
    }, [toggleSidebar]);
    let state = open ? "expanded" : "collapsed", contextValue = React10.useMemo(
      () => ({
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar
      }),
      [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
    );
    return /* @__PURE__ */ jsxDEV14(SidebarContext2.Provider, { value: contextValue, children: /* @__PURE__ */ jsxDEV14(TooltipProvider, { delayDuration: 0, children: /* @__PURE__ */ jsxDEV14(
      "div",
      {
        style: {
          "--sidebar-width": SIDEBAR_WIDTH,
          "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
          ...style
        },
        className: cn(
          "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",
          className
        ),
        ref,
        ...props,
        children
      },
      void 0,
      !1,
      {
        fileName: "src/app/components/ui/sidebar.tsx",
        lineNumber: 133,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "src/app/components/ui/sidebar.tsx",
      lineNumber: 132,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "src/app/components/ui/sidebar.tsx",
      lineNumber: 131,
      columnNumber: 7
    }, this);
  }
);
SidebarProvider2.displayName = "SidebarProvider";
var Sidebar = React10.forwardRef(
  ({
    side = "left",
    variant = "sidebar",
    collapsible = "offcanvas",
    className,
    children,
    ...props
  }, ref) => {
    let { isMobile, state, openMobile, setOpenMobile } = useSidebar();
    return collapsible === "none" ? /* @__PURE__ */ jsxDEV14(
      "div",
      {
        className: cn(
          "flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground",
          className
        ),
        ref,
        ...props,
        children
      },
      void 0,
      !1,
      {
        fileName: "src/app/components/ui/sidebar.tsx",
        lineNumber: 180,
        columnNumber: 9
      },
      this
    ) : isMobile ? /* @__PURE__ */ jsxDEV14(Sheet, { open: openMobile, onOpenChange: setOpenMobile, ...props, children: /* @__PURE__ */ jsxDEV14(
      SheetContent,
      {
        "data-sidebar": "sidebar",
        "data-mobile": "true",
        className: "w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
        style: {
          "--sidebar-width": SIDEBAR_WIDTH_MOBILE
        },
        side,
        children: /* @__PURE__ */ jsxDEV14("div", { className: "flex h-full w-full flex-col", children }, void 0, !1, {
          fileName: "src/app/components/ui/sidebar.tsx",
          lineNumber: 207,
          columnNumber: 13
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "src/app/components/ui/sidebar.tsx",
        lineNumber: 196,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "src/app/components/ui/sidebar.tsx",
      lineNumber: 195,
      columnNumber: 9
    }, this) : /* @__PURE__ */ jsxDEV14(
      "div",
      {
        ref,
        className: "group peer hidden md:block text-sidebar-foreground",
        "data-state": state,
        "data-collapsible": state === "collapsed" ? collapsible : "",
        "data-variant": variant,
        "data-side": side,
        children: [
          /* @__PURE__ */ jsxDEV14(
            "div",
            {
              className: cn(
                "duration-200 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear",
                "group-data-[collapsible=offcanvas]:w-0",
                "group-data-[side=right]:rotate-180",
                variant === "floating" || variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
              )
            },
            void 0,
            !1,
            {
              fileName: "src/app/components/ui/sidebar.tsx",
              lineNumber: 223,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV14(
            "div",
            {
              className: cn(
                "duration-200 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] ease-linear md:flex",
                side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
                // Adjust the padding for floating and inset variants.
                variant === "floating" || variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
                className
              ),
              ...props,
              children: /* @__PURE__ */ jsxDEV14(
                "div",
                {
                  "data-sidebar": "sidebar",
                  className: "flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow",
                  children
                },
                void 0,
                !1,
                {
                  fileName: "src/app/components/ui/sidebar.tsx",
                  lineNumber: 247,
                  columnNumber: 11
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "src/app/components/ui/sidebar.tsx",
              lineNumber: 233,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "src/app/components/ui/sidebar.tsx",
        lineNumber: 214,
        columnNumber: 7
      },
      this
    );
  }
);
Sidebar.displayName = "Sidebar";
var SidebarTrigger = React10.forwardRef(({ className, onClick, ...props }, ref) => {
  let { toggleSidebar } = useSidebar();
  return /* @__PURE__ */ jsxDEV14(
    Button,
    {
      ref,
      "data-sidebar": "trigger",
      variant: "ghost",
      size: "icon",
      className: cn("h-7 w-7", className),
      onClick: (event) => {
        onClick?.(event), toggleSidebar();
      },
      ...props,
      children: [
        /* @__PURE__ */ jsxDEV14(PanelLeft, {}, void 0, !1, {
          fileName: "src/app/components/ui/sidebar.tsx",
          lineNumber: 279,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV14("span", { className: "sr-only", children: "Toggle Sidebar" }, void 0, !1, {
          fileName: "src/app/components/ui/sidebar.tsx",
          lineNumber: 280,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "src/app/components/ui/sidebar.tsx",
      lineNumber: 267,
      columnNumber: 5
    },
    this
  );
});
SidebarTrigger.displayName = "SidebarTrigger";
var SidebarRail = React10.forwardRef(({ className, ...props }, ref) => {
  let { toggleSidebar } = useSidebar();
  return /* @__PURE__ */ jsxDEV14(
    "button",
    {
      ref,
      "data-sidebar": "rail",
      "aria-label": "Toggle Sidebar",
      tabIndex: -1,
      onClick: toggleSidebar,
      title: "Toggle Sidebar",
      className: cn(
        "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
        "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        className
      ),
      ...props
    },
    void 0,
    !1,
    {
      fileName: "src/app/components/ui/sidebar.tsx",
      lineNumber: 293,
      columnNumber: 5
    },
    this
  );
});
SidebarRail.displayName = "SidebarRail";
var SidebarInset = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV14(
  "main",
  {
    ref,
    className: cn(
      "relative flex min-h-svh flex-1 flex-col bg-background",
      "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/sidebar.tsx",
    lineNumber: 320,
    columnNumber: 5
  },
  this
));
SidebarInset.displayName = "SidebarInset";
var SidebarInput = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV14(
  Input,
  {
    ref,
    "data-sidebar": "input",
    className: cn(
      "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/sidebar.tsx",
    lineNumber: 338,
    columnNumber: 5
  },
  this
));
SidebarInput.displayName = "SidebarInput";
var SidebarHeader = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV14(
  "div",
  {
    ref,
    "data-sidebar": "header",
    className: cn("flex flex-col gap-2 p-2", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/sidebar.tsx",
    lineNumber: 356,
    columnNumber: 5
  },
  this
));
SidebarHeader.displayName = "SidebarHeader";
var SidebarFooter = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV14(
  "div",
  {
    ref,
    "data-sidebar": "footer",
    className: cn("flex flex-col gap-2 p-2", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/sidebar.tsx",
    lineNumber: 371,
    columnNumber: 5
  },
  this
));
SidebarFooter.displayName = "SidebarFooter";
var SidebarSeparator = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV14(
  Separator,
  {
    ref,
    "data-sidebar": "separator",
    className: cn("mx-2 w-auto bg-sidebar-border", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/sidebar.tsx",
    lineNumber: 386,
    columnNumber: 5
  },
  this
));
SidebarSeparator.displayName = "SidebarSeparator";
var SidebarContent = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV14(
  "div",
  {
    ref,
    "data-sidebar": "content",
    className: cn(
      "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/sidebar.tsx",
    lineNumber: 401,
    columnNumber: 5
  },
  this
));
SidebarContent.displayName = "SidebarContent";
var SidebarGroup = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV14(
  "div",
  {
    ref,
    "data-sidebar": "group",
    className: cn("relative flex w-full min-w-0 flex-col p-2", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/sidebar.tsx",
    lineNumber: 419,
    columnNumber: 5
  },
  this
));
SidebarGroup.displayName = "SidebarGroup";
var SidebarGroupLabel = React10.forwardRef(({ className, asChild = !1, ...props }, ref) => /* @__PURE__ */ jsxDEV14(
  asChild ? Slot2 : "div",
  {
    ref,
    "data-sidebar": "group-label",
    className: cn(
      "duration-200 flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
      "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/sidebar.tsx",
    lineNumber: 436,
    columnNumber: 5
  },
  this
));
SidebarGroupLabel.displayName = "SidebarGroupLabel";
var SidebarGroupAction = React10.forwardRef(({ className, asChild = !1, ...props }, ref) => /* @__PURE__ */ jsxDEV14(
  asChild ? Slot2 : "button",
  {
    ref,
    "data-sidebar": "group-action",
    className: cn(
      "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
      // Increases the hit area of the button on mobile.
      "after:absolute after:-inset-2 after:md:hidden",
      "group-data-[collapsible=icon]:hidden",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/sidebar.tsx",
    lineNumber: 457,
    columnNumber: 5
  },
  this
));
SidebarGroupAction.displayName = "SidebarGroupAction";
var SidebarGroupContent = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV14(
  "div",
  {
    ref,
    "data-sidebar": "group-content",
    className: cn("w-full text-sm", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/sidebar.tsx",
    lineNumber: 477,
    columnNumber: 3
  },
  this
));
SidebarGroupContent.displayName = "SidebarGroupContent";
var SidebarMenu = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV14(
  "ul",
  {
    ref,
    "data-sidebar": "menu",
    className: cn("flex w-full min-w-0 flex-col gap-1", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/sidebar.tsx",
    lineNumber: 490,
    columnNumber: 3
  },
  this
));
SidebarMenu.displayName = "SidebarMenu";
var SidebarMenuItem = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV14(
  "li",
  {
    ref,
    "data-sidebar": "menu-item",
    className: cn("group/menu-item relative", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/sidebar.tsx",
    lineNumber: 503,
    columnNumber: 3
  },
  this
));
SidebarMenuItem.displayName = "SidebarMenuItem";
var sidebarMenuButtonVariants = cva4(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), SidebarMenuButton = React10.forwardRef(
  ({
    asChild = !1,
    isActive = !1,
    variant = "default",
    size = "default",
    tooltip,
    className,
    ...props
  }, ref) => {
    let Comp = asChild ? Slot2 : "button", { isMobile, state } = useSidebar(), button = /* @__PURE__ */ jsxDEV14(
      Comp,
      {
        ref,
        "data-sidebar": "menu-button",
        "data-size": size,
        "data-active": isActive,
        className: cn(sidebarMenuButtonVariants({ variant, size }), className),
        ...props
      },
      void 0,
      !1,
      {
        fileName: "src/app/components/ui/sidebar.tsx",
        lineNumber: 558,
        columnNumber: 7
      },
      this
    );
    return tooltip ? (typeof tooltip == "string" && (tooltip = {
      children: tooltip
    }), /* @__PURE__ */ jsxDEV14(Tooltip, { children: [
      /* @__PURE__ */ jsxDEV14(TooltipTrigger, { asChild: !0, children: button }, void 0, !1, {
        fileName: "src/app/components/ui/sidebar.tsx",
        lineNumber: 580,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV14(
        TooltipContent,
        {
          side: "right",
          align: "center",
          hidden: state !== "collapsed" || isMobile,
          ...tooltip
        },
        void 0,
        !1,
        {
          fileName: "src/app/components/ui/sidebar.tsx",
          lineNumber: 581,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "src/app/components/ui/sidebar.tsx",
      lineNumber: 579,
      columnNumber: 7
    }, this)) : button;
  }
);
SidebarMenuButton.displayName = "SidebarMenuButton";
var SidebarMenuAction = React10.forwardRef(({ className, asChild = !1, showOnHover = !1, ...props }, ref) => /* @__PURE__ */ jsxDEV14(
  asChild ? Slot2 : "button",
  {
    ref,
    "data-sidebar": "menu-action",
    className: cn(
      "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0",
      // Increases the hit area of the button on mobile.
      "after:absolute after:-inset-2 after:md:hidden",
      "peer-data-[size=sm]/menu-button:top-1",
      "peer-data-[size=default]/menu-button:top-1.5",
      "peer-data-[size=lg]/menu-button:top-2.5",
      "group-data-[collapsible=icon]:hidden",
      showOnHover && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/sidebar.tsx",
    lineNumber: 603,
    columnNumber: 5
  },
  this
));
SidebarMenuAction.displayName = "SidebarMenuAction";
var SidebarMenuBadge = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV14(
  "div",
  {
    ref,
    "data-sidebar": "menu-badge",
    className: cn(
      "absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground select-none pointer-events-none",
      "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
      "peer-data-[size=sm]/menu-button:top-1",
      "peer-data-[size=default]/menu-button:top-1.5",
      "peer-data-[size=lg]/menu-button:top-2.5",
      "group-data-[collapsible=icon]:hidden",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/sidebar.tsx",
    lineNumber: 628,
    columnNumber: 3
  },
  this
));
SidebarMenuBadge.displayName = "SidebarMenuBadge";
var SidebarMenuSkeleton = React10.forwardRef(({ className, showIcon = !1, ...props }, ref) => {
  let width = React10.useMemo(() => `${Math.floor(Math.random() * 40) + 50}%`, []);
  return /* @__PURE__ */ jsxDEV14(
    "div",
    {
      ref,
      "data-sidebar": "menu-skeleton",
      className: cn("rounded-md h-8 flex gap-2 px-2 items-center", className),
      ...props,
      children: [
        showIcon && /* @__PURE__ */ jsxDEV14(
          Skeleton,
          {
            className: "size-4 rounded-md",
            "data-sidebar": "menu-skeleton-icon"
          },
          void 0,
          !1,
          {
            fileName: "src/app/components/ui/sidebar.tsx",
            lineNumber: 664,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ jsxDEV14(
          Skeleton,
          {
            className: "h-4 flex-1 max-w-[--skeleton-width]",
            "data-sidebar": "menu-skeleton-text",
            style: {
              "--skeleton-width": width
            }
          },
          void 0,
          !1,
          {
            fileName: "src/app/components/ui/sidebar.tsx",
            lineNumber: 669,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "src/app/components/ui/sidebar.tsx",
      lineNumber: 657,
      columnNumber: 5
    },
    this
  );
});
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton";
var SidebarMenuSub = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV14(
  "ul",
  {
    ref,
    "data-sidebar": "menu-sub",
    className: cn(
      "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
      "group-data-[collapsible=icon]:hidden",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/sidebar.tsx",
    lineNumber: 687,
    columnNumber: 3
  },
  this
));
SidebarMenuSub.displayName = "SidebarMenuSub";
var SidebarMenuSubItem = React10.forwardRef(({ ...props }, ref) => /* @__PURE__ */ jsxDEV14("li", { ref, ...props }, void 0, !1, {
  fileName: "src/app/components/ui/sidebar.tsx",
  lineNumber: 703,
  columnNumber: 26
}, this));
SidebarMenuSubItem.displayName = "SidebarMenuSubItem";
var SidebarMenuSubButton = React10.forwardRef(({ asChild = !1, size = "md", isActive, className, ...props }, ref) => /* @__PURE__ */ jsxDEV14(
  asChild ? Slot2 : "a",
  {
    ref,
    "data-sidebar": "menu-sub-button",
    "data-size": size,
    "data-active": isActive,
    className: cn(
      "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
      "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
      size === "sm" && "text-xs",
      size === "md" && "text-sm",
      "group-data-[collapsible=icon]:hidden",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/sidebar.tsx",
    lineNumber: 717,
    columnNumber: 5
  },
  this
));
SidebarMenuSubButton.displayName = "SidebarMenuSubButton";

// src/app/components/layout/MainNavigation.tsx
import { Link as Link2, useLocation } from "@remix-run/react";
import {
  Home,
  PieChart,
  CreditCard,
  PlusCircle,
  Wallet,
  LineChart
} from "lucide-react";

// src/app/components/layout/UserMenu.tsx
import * as React13 from "react";
import { Link, useNavigate } from "@remix-run/react";

// src/app/components/ui/avatar.tsx
import * as React11 from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { jsxDEV as jsxDEV15 } from "react/jsx-dev-runtime";
var Avatar = React11.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV15(
  AvatarPrimitive.Root,
  {
    ref,
    className: cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/avatar.tsx",
    lineNumber: 10,
    columnNumber: 3
  },
  this
));
Avatar.displayName = AvatarPrimitive.Root.displayName;
var AvatarImage = React11.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV15(
  AvatarPrimitive.Image,
  {
    ref,
    className: cn("aspect-square h-full w-full", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/avatar.tsx",
    lineNumber: 25,
    columnNumber: 3
  },
  this
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
var AvatarFallback = React11.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV15(
  AvatarPrimitive.Fallback,
  {
    ref,
    className: cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/avatar.tsx",
    lineNumber: 37,
    columnNumber: 3
  },
  this
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

// src/app/components/ui/dropdown-menu.tsx
import * as React12 from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";
import { jsxDEV as jsxDEV16 } from "react/jsx-dev-runtime";
var DropdownMenu = DropdownMenuPrimitive.Root, DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
var DropdownMenuSubTrigger = React12.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxDEV16(
  DropdownMenuPrimitive.SubTrigger,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxDEV16(ChevronRight, { className: "ml-auto h-4 w-4" }, void 0, !1, {
        fileName: "src/app/components/ui/dropdown-menu.tsx",
        lineNumber: 35,
        columnNumber: 5
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "src/app/components/ui/dropdown-menu.tsx",
    lineNumber: 25,
    columnNumber: 3
  },
  this
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
var DropdownMenuSubContent = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV16(
  DropdownMenuPrimitive.SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/dropdown-menu.tsx",
    lineNumber: 45,
    columnNumber: 3
  },
  this
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
var DropdownMenuContent = React12.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxDEV16(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsxDEV16(
  DropdownMenuPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/dropdown-menu.tsx",
    lineNumber: 62,
    columnNumber: 5
  },
  this
) }, void 0, !1, {
  fileName: "src/app/components/ui/dropdown-menu.tsx",
  lineNumber: 61,
  columnNumber: 3
}, this));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
var DropdownMenuItem = React12.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxDEV16(
  DropdownMenuPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/dropdown-menu.tsx",
    lineNumber: 81,
    columnNumber: 3
  },
  this
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
var DropdownMenuCheckboxItem = React12.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxDEV16(
  DropdownMenuPrimitive.CheckboxItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsxDEV16("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxDEV16(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsxDEV16(Check, { className: "h-4 w-4" }, void 0, !1, {
        fileName: "src/app/components/ui/dropdown-menu.tsx",
        lineNumber: 108,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "src/app/components/ui/dropdown-menu.tsx",
        lineNumber: 107,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "src/app/components/ui/dropdown-menu.tsx",
        lineNumber: 106,
        columnNumber: 5
      }, this),
      children
    ]
  },
  void 0,
  !0,
  {
    fileName: "src/app/components/ui/dropdown-menu.tsx",
    lineNumber: 97,
    columnNumber: 3
  },
  this
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
var DropdownMenuRadioItem = React12.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDEV16(
  DropdownMenuPrimitive.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxDEV16("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxDEV16(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsxDEV16(Circle, { className: "h-2 w-2 fill-current" }, void 0, !1, {
        fileName: "src/app/components/ui/dropdown-menu.tsx",
        lineNumber: 131,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "src/app/components/ui/dropdown-menu.tsx",
        lineNumber: 130,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "src/app/components/ui/dropdown-menu.tsx",
        lineNumber: 129,
        columnNumber: 5
      }, this),
      children
    ]
  },
  void 0,
  !0,
  {
    fileName: "src/app/components/ui/dropdown-menu.tsx",
    lineNumber: 121,
    columnNumber: 3
  },
  this
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
var DropdownMenuLabel = React12.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxDEV16(
  DropdownMenuPrimitive.Label,
  {
    ref,
    className: cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/dropdown-menu.tsx",
    lineNumber: 145,
    columnNumber: 3
  },
  this
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
var DropdownMenuSeparator = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV16(
  DropdownMenuPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/dropdown-menu.tsx",
    lineNumber: 161,
    columnNumber: 3
  },
  this
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
var DropdownMenuShortcut = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxDEV16(
  "span",
  {
    className: cn("ml-auto text-xs tracking-widest opacity-60", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/dropdown-menu.tsx",
    lineNumber: 174,
    columnNumber: 5
  },
  this
);
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

// src/app/components/layout/UserMenu.tsx
import { LogOut, Settings, User } from "lucide-react";
import { toast as toast2 } from "sonner";
import { jsxDEV as jsxDEV17 } from "react/jsx-dev-runtime";
var UserMenu = () => {
  let [profile, setProfile] = React13.useState(null), navigate = useNavigate();
  React13.useEffect(() => {
    (async () => {
      try {
        let { data: { user } } = await supabase.auth.getUser();
        if (!user)
          return;
        let { data, error } = await supabase.from("user_profiles").select("id, full_name, avatar_url").eq("id", user.id).single();
        error ? console.error("Error fetching profile:", error) : data && setProfile(data);
      } catch (error) {
        console.error("Error:", error);
      }
    })();
  }, []);
  let handleLogout = async () => {
    try {
      let { error } = await supabase.auth.signOut();
      if (error)
        throw error;
      toast2.success("Logout realizado", {
        description: "Voc\xEA foi desconectado com sucesso."
      }), navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error), toast2.error("Erro ao fazer logout", {
        description: error.message || "Tente novamente mais tarde."
      });
    }
  };
  return /* @__PURE__ */ jsxDEV17(DropdownMenu, { children: [
    /* @__PURE__ */ jsxDEV17(DropdownMenuTrigger, { asChild: !0, children: /* @__PURE__ */ jsxDEV17("button", { className: "flex items-center space-x-2 rounded-full p-1 transition-colors hover:bg-secondary/10 focus:outline-none", children: [
      /* @__PURE__ */ jsxDEV17(Avatar, { className: "h-8 w-8", children: [
        /* @__PURE__ */ jsxDEV17(AvatarImage, { src: profile?.avatar_url || "", alt: profile?.full_name || "User" }, void 0, !1, {
          fileName: "src/app/components/layout/UserMenu.tsx",
          lineNumber: 80,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV17(AvatarFallback, { className: "text-sm", children: profile?.full_name?.substring(0, 2) || "U" }, void 0, !1, {
          fileName: "src/app/components/layout/UserMenu.tsx",
          lineNumber: 81,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "src/app/components/layout/UserMenu.tsx",
        lineNumber: 79,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV17("span", { className: "text-sm font-medium hidden md:inline-block", children: profile?.full_name || "Usu\xE1rio" }, void 0, !1, {
        fileName: "src/app/components/layout/UserMenu.tsx",
        lineNumber: 85,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "src/app/components/layout/UserMenu.tsx",
      lineNumber: 78,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "src/app/components/layout/UserMenu.tsx",
      lineNumber: 77,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV17(DropdownMenuContent, { align: "end", className: "w-56", children: [
      /* @__PURE__ */ jsxDEV17(DropdownMenuLabel, { children: "Minha Conta" }, void 0, !1, {
        fileName: "src/app/components/layout/UserMenu.tsx",
        lineNumber: 91,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV17(DropdownMenuSeparator, {}, void 0, !1, {
        fileName: "src/app/components/layout/UserMenu.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV17(DropdownMenuItem, { asChild: !0, children: /* @__PURE__ */ jsxDEV17(Link, { to: "/perfil", className: "flex items-center cursor-pointer", children: [
        /* @__PURE__ */ jsxDEV17(User, { className: "h-4 w-4 mr-2" }, void 0, !1, {
          fileName: "src/app/components/layout/UserMenu.tsx",
          lineNumber: 95,
          columnNumber: 13
        }, this),
        "Perfil"
      ] }, void 0, !0, {
        fileName: "src/app/components/layout/UserMenu.tsx",
        lineNumber: 94,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "src/app/components/layout/UserMenu.tsx",
        lineNumber: 93,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV17(DropdownMenuItem, { asChild: !0, children: /* @__PURE__ */ jsxDEV17(Link, { to: "/configuracoes", className: "flex items-center cursor-pointer", children: [
        /* @__PURE__ */ jsxDEV17(Settings, { className: "h-4 w-4 mr-2" }, void 0, !1, {
          fileName: "src/app/components/layout/UserMenu.tsx",
          lineNumber: 101,
          columnNumber: 13
        }, this),
        "Configura\xE7\xF5es"
      ] }, void 0, !0, {
        fileName: "src/app/components/layout/UserMenu.tsx",
        lineNumber: 100,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "src/app/components/layout/UserMenu.tsx",
        lineNumber: 99,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV17(DropdownMenuSeparator, {}, void 0, !1, {
        fileName: "src/app/components/layout/UserMenu.tsx",
        lineNumber: 105,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV17(
        DropdownMenuItem,
        {
          onClick: handleLogout,
          className: "text-expense cursor-pointer",
          children: [
            /* @__PURE__ */ jsxDEV17(LogOut, { className: "h-4 w-4 mr-2" }, void 0, !1, {
              fileName: "src/app/components/layout/UserMenu.tsx",
              lineNumber: 110,
              columnNumber: 11
            }, this),
            "Sair"
          ]
        },
        void 0,
        !0,
        {
          fileName: "src/app/components/layout/UserMenu.tsx",
          lineNumber: 106,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "src/app/components/layout/UserMenu.tsx",
      lineNumber: 90,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "src/app/components/layout/UserMenu.tsx",
    lineNumber: 76,
    columnNumber: 5
  }, this);
};

// src/app/components/layout/MainNavigation.tsx
import { jsxDEV as jsxDEV18 } from "react/jsx-dev-runtime";
var MainNavigation = () => {
  let location = useLocation();
  return /* @__PURE__ */ jsxDEV18(Sidebar, { children: [
    /* @__PURE__ */ jsxDEV18(SidebarHeader, { className: "p-4 flex items-center justify-between", children: /* @__PURE__ */ jsxDEV18("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ jsxDEV18("div", { className: "h-8 w-8 rounded-full bg-primary flex items-center justify-center", children: /* @__PURE__ */ jsxDEV18("span", { className: "text-white font-semibold", children: "NV" }, void 0, !1, {
        fileName: "src/app/components/layout/MainNavigation.tsx",
        lineNumber: 68,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "src/app/components/layout/MainNavigation.tsx",
        lineNumber: 67,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV18("div", { className: "font-semibold text-lg", children: "NoVermelho" }, void 0, !1, {
        fileName: "src/app/components/layout/MainNavigation.tsx",
        lineNumber: 70,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "src/app/components/layout/MainNavigation.tsx",
      lineNumber: 66,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "src/app/components/layout/MainNavigation.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV18(SidebarContent, { children: /* @__PURE__ */ jsxDEV18(SidebarGroup, { children: [
      /* @__PURE__ */ jsxDEV18(SidebarGroupLabel, { children: "Menu" }, void 0, !1, {
        fileName: "src/app/components/layout/MainNavigation.tsx",
        lineNumber: 75,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV18(SidebarGroupContent, { children: /* @__PURE__ */ jsxDEV18(SidebarMenu, { children: [
        {
          title: "Dashboard",
          icon: Home,
          path: "/"
        },
        {
          title: "An\xE1lise",
          icon: PieChart,
          path: "/analise"
        },
        {
          title: "Or\xE7amentos",
          icon: LineChart,
          path: "/orcamentos"
        },
        {
          title: "Despesas",
          icon: CreditCard,
          path: "/despesas"
        },
        {
          title: "Receitas",
          icon: PlusCircle,
          path: "/receitas"
        },
        {
          title: "Carteiras",
          icon: Wallet,
          path: "/carteiras"
        }
      ].map((item) => /* @__PURE__ */ jsxDEV18(SidebarMenuItem, { children: /* @__PURE__ */ jsxDEV18(SidebarMenuButton, { asChild: !0, children: /* @__PURE__ */ jsxDEV18(
        Link2,
        {
          to: item.path,
          className: cn(
            "flex items-center space-x-2 w-full",
            location.pathname === item.path && "text-primary font-medium"
          ),
          children: [
            /* @__PURE__ */ jsxDEV18(item.icon, { size: 18 }, void 0, !1, {
              fileName: "src/app/components/layout/MainNavigation.tsx",
              lineNumber: 88,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDEV18("span", { children: item.title }, void 0, !1, {
              fileName: "src/app/components/layout/MainNavigation.tsx",
              lineNumber: 89,
              columnNumber: 23
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "src/app/components/layout/MainNavigation.tsx",
          lineNumber: 81,
          columnNumber: 21
        },
        this
      ) }, void 0, !1, {
        fileName: "src/app/components/layout/MainNavigation.tsx",
        lineNumber: 80,
        columnNumber: 19
      }, this) }, item.path, !1, {
        fileName: "src/app/components/layout/MainNavigation.tsx",
        lineNumber: 79,
        columnNumber: 17
      }, this)) }, void 0, !1, {
        fileName: "src/app/components/layout/MainNavigation.tsx",
        lineNumber: 77,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "src/app/components/layout/MainNavigation.tsx",
        lineNumber: 76,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "src/app/components/layout/MainNavigation.tsx",
      lineNumber: 74,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "src/app/components/layout/MainNavigation.tsx",
      lineNumber: 73,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV18(SidebarFooter, { className: "border-t border-border p-4", children: /* @__PURE__ */ jsxDEV18(UserMenu, {}, void 0, !1, {
      fileName: "src/app/components/layout/MainNavigation.tsx",
      lineNumber: 99,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "src/app/components/layout/MainNavigation.tsx",
      lineNumber: 98,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "src/app/components/layout/MainNavigation.tsx",
    lineNumber: 64,
    columnNumber: 5
  }, this);
};

// src/app/components/layout/MobileNavigation.tsx
import { Link as Link3, useLocation as useLocation2 } from "@remix-run/react";
import {
  Home as Home2,
  PieChart as PieChart2,
  Wallet as Wallet2,
  LineChart as LineChart2,
  User as User2
} from "lucide-react";
import { jsxDEV as jsxDEV19 } from "react/jsx-dev-runtime";
var MobileNavigation = () => {
  let location = useLocation2();
  return /* @__PURE__ */ jsxDEV19("div", { className: "fixed bottom-0 left-0 right-0 border-t border-border bg-background py-2 px-4 animate-slide-in-up z-10", children: /* @__PURE__ */ jsxDEV19("nav", { className: "flex justify-between items-center", children: [
    {
      title: "Home",
      icon: Home2,
      path: "/"
    },
    {
      title: "An\xE1lise",
      icon: PieChart2,
      path: "/analise"
    },
    {
      title: "Or\xE7amento",
      icon: LineChart2,
      path: "/orcamentos"
    },
    {
      title: "Carteiras",
      icon: Wallet2,
      path: "/carteiras"
    },
    {
      title: "Perfil",
      icon: User2,
      path: "/perfil"
    }
  ].map((item) => /* @__PURE__ */ jsxDEV19(
    Link3,
    {
      to: item.path,
      className: cn(
        "flex flex-col items-center py-2 px-1",
        location.pathname === item.path ? "text-primary" : "text-muted-foreground"
      ),
      children: [
        /* @__PURE__ */ jsxDEV19(item.icon, { size: 20 }, void 0, !1, {
          fileName: "src/app/components/layout/MobileNavigation.tsx",
          lineNumber: 59,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV19("span", { className: "text-xs mt-1", children: item.title }, void 0, !1, {
          fileName: "src/app/components/layout/MobileNavigation.tsx",
          lineNumber: 60,
          columnNumber: 13
        }, this)
      ]
    },
    item.path,
    !0,
    {
      fileName: "src/app/components/layout/MobileNavigation.tsx",
      lineNumber: 49,
      columnNumber: 11
    },
    this
  )) }, void 0, !1, {
    fileName: "src/app/components/layout/MobileNavigation.tsx",
    lineNumber: 47,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "src/app/components/layout/MobileNavigation.tsx",
    lineNumber: 46,
    columnNumber: 5
  }, this);
};

// src/app/components/layout/AppLayout.tsx
import { jsxDEV as jsxDEV20 } from "react/jsx-dev-runtime";
var AppLayout = ({ children }) => {
  let isMobile = useIsMobile();
  return /* @__PURE__ */ jsxDEV20(SidebarProvider2, { children: [
    /* @__PURE__ */ jsxDEV20("div", { className: "min-h-screen flex w-full bg-background", children: [
      !isMobile && /* @__PURE__ */ jsxDEV20(MainNavigation, {}, void 0, !1, {
        fileName: "src/app/components/layout/AppLayout.tsx",
        lineNumber: 20,
        columnNumber: 23
      }, this),
      /* @__PURE__ */ jsxDEV20("div", { className: "flex-1 flex flex-col", children: [
        /* @__PURE__ */ jsxDEV20(ScrollArea, { className: "flex-1", children: /* @__PURE__ */ jsxDEV20("main", { className: "flex-1 p-6 md:p-8 animate-fade-in", children }, void 0, !1, {
          fileName: "src/app/components/layout/AppLayout.tsx",
          lineNumber: 23,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "src/app/components/layout/AppLayout.tsx",
          lineNumber: 22,
          columnNumber: 11
        }, this),
        isMobile && /* @__PURE__ */ jsxDEV20(MobileNavigation, {}, void 0, !1, {
          fileName: "src/app/components/layout/AppLayout.tsx",
          lineNumber: 27,
          columnNumber: 24
        }, this)
      ] }, void 0, !0, {
        fileName: "src/app/components/layout/AppLayout.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "src/app/components/layout/AppLayout.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV20(Toaster2, {}, void 0, !1, {
      fileName: "src/app/components/layout/AppLayout.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV20(Toaster, { position: "top-right" }, void 0, !1, {
      fileName: "src/app/components/layout/AppLayout.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "src/app/components/layout/AppLayout.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
};

// src/app/components/budget/BudgetPage.tsx
import { useEffect as useEffect5, useState as useState7 } from "react";

// src/app/components/ui/card.tsx
import * as React14 from "react";
import { jsxDEV as jsxDEV21 } from "react/jsx-dev-runtime";
var Card = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV21(
  "div",
  {
    ref,
    className: cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/card.tsx",
    lineNumber: 9,
    columnNumber: 3
  },
  this
));
Card.displayName = "Card";
var CardHeader = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV21(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/card.tsx",
    lineNumber: 24,
    columnNumber: 3
  },
  this
));
CardHeader.displayName = "CardHeader";
var CardTitle = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV21(
  "h3",
  {
    ref,
    className: cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/card.tsx",
    lineNumber: 36,
    columnNumber: 3
  },
  this
));
CardTitle.displayName = "CardTitle";
var CardDescription = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV21(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/card.tsx",
    lineNumber: 51,
    columnNumber: 3
  },
  this
));
CardDescription.displayName = "CardDescription";
var CardContent = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV21("div", { ref, className: cn("p-6 pt-0", className), ...props }, void 0, !1, {
  fileName: "src/app/components/ui/card.tsx",
  lineNumber: 63,
  columnNumber: 3
}, this));
CardContent.displayName = "CardContent";
var CardFooter = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV21(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/card.tsx",
    lineNumber: 71,
    columnNumber: 3
  },
  this
));
CardFooter.displayName = "CardFooter";

// src/app/components/ui/progress.tsx
import * as React15 from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { jsxDEV as jsxDEV22 } from "react/jsx-dev-runtime";
var Progress = React15.forwardRef(({ className, value, indicatorClassName, ...props }, ref) => /* @__PURE__ */ jsxDEV22(
  ProgressPrimitive.Root,
  {
    ref,
    className: cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxDEV22(
      ProgressPrimitive.Indicator,
      {
        className: cn("h-full w-full flex-1 bg-primary transition-all", indicatorClassName),
        style: { transform: `translateX(-${100 - (value || 0)}%)` }
      },
      void 0,
      !1,
      {
        fileName: "src/app/components/ui/progress.tsx",
        lineNumber: 21,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/progress.tsx",
    lineNumber: 13,
    columnNumber: 3
  },
  this
));
Progress.displayName = ProgressPrimitive.Root.displayName;

// src/app/components/budget/BudgetPage.tsx
import { PlusCircle as PlusCircle3, Loader2 as Loader22, AlertTriangle } from "lucide-react";
import { toast as toast4 } from "sonner";

// src/app/components/budget/AddBudgetDialog.tsx
import { useState as useState6 } from "react";

// src/app/components/ui/dialog.tsx
import * as React16 from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X as X3 } from "lucide-react";
import { jsxDEV as jsxDEV23 } from "react/jsx-dev-runtime";
var Dialog = DialogPrimitive.Root;
var DialogPortal = DialogPrimitive.Portal;
var DialogOverlay = React16.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV23(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/dialog.tsx",
    lineNumber: 19,
    columnNumber: 3
  },
  this
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
var DialogContent = React16.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDEV23(DialogPortal, { children: [
  /* @__PURE__ */ jsxDEV23(DialogOverlay, {}, void 0, !1, {
    fileName: "src/app/components/ui/dialog.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ jsxDEV23(
    DialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxDEV23(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsxDEV23(X3, { className: "h-4 w-4" }, void 0, !1, {
            fileName: "src/app/components/ui/dialog.tsx",
            lineNumber: 46,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV23("span", { className: "sr-only", children: "Close" }, void 0, !1, {
            fileName: "src/app/components/ui/dialog.tsx",
            lineNumber: 47,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "src/app/components/ui/dialog.tsx",
          lineNumber: 45,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "src/app/components/ui/dialog.tsx",
      lineNumber: 36,
      columnNumber: 5
    },
    this
  )
] }, void 0, !0, {
  fileName: "src/app/components/ui/dialog.tsx",
  lineNumber: 34,
  columnNumber: 3
}, this));
DialogContent.displayName = DialogPrimitive.Content.displayName;
var DialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxDEV23(
  "div",
  {
    className: cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/dialog.tsx",
    lineNumber: 58,
    columnNumber: 3
  },
  this
);
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxDEV23(
  "div",
  {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/dialog.tsx",
    lineNumber: 72,
    columnNumber: 3
  },
  this
);
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React16.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV23(
  DialogPrimitive.Title,
  {
    ref,
    className: cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/dialog.tsx",
    lineNumber: 86,
    columnNumber: 3
  },
  this
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
var DialogDescription = React16.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV23(
  DialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/dialog.tsx",
    lineNumber: 101,
    columnNumber: 3
  },
  this
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

// src/app/components/ui/label.tsx
import * as React17 from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva as cva5 } from "class-variance-authority";
import { jsxDEV as jsxDEV24 } from "react/jsx-dev-runtime";
var labelVariants = cva5(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), Label2 = React17.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV24(
  LabelPrimitive.Root,
  {
    ref,
    className: cn(labelVariants(), className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/label.tsx",
    lineNumber: 16,
    columnNumber: 3
  },
  this
));
Label2.displayName = LabelPrimitive.Root.displayName;

// src/app/components/ui/select.tsx
import * as React18 from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check as Check2, ChevronDown, ChevronUp } from "lucide-react";
import { jsxDEV as jsxDEV25 } from "react/jsx-dev-runtime";
var Select = SelectPrimitive.Root;
var SelectValue = SelectPrimitive.Value, SelectTrigger = React18.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDEV25(
  SelectPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxDEV25(SelectPrimitive.Icon, { asChild: !0, children: /* @__PURE__ */ jsxDEV25(ChevronDown, { className: "h-4 w-4 opacity-50" }, void 0, !1, {
        fileName: "src/app/components/ui/select.tsx",
        lineNumber: 27,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "src/app/components/ui/select.tsx",
        lineNumber: 26,
        columnNumber: 5
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "src/app/components/ui/select.tsx",
    lineNumber: 17,
    columnNumber: 3
  },
  this
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
var SelectScrollUpButton = React18.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV25(
  SelectPrimitive.ScrollUpButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxDEV25(ChevronUp, { className: "h-4 w-4" }, void 0, !1, {
      fileName: "src/app/components/ui/select.tsx",
      lineNumber: 45,
      columnNumber: 5
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/select.tsx",
    lineNumber: 37,
    columnNumber: 3
  },
  this
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
var SelectScrollDownButton = React18.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV25(
  SelectPrimitive.ScrollDownButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxDEV25(ChevronDown, { className: "h-4 w-4" }, void 0, !1, {
      fileName: "src/app/components/ui/select.tsx",
      lineNumber: 62,
      columnNumber: 5
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/select.tsx",
    lineNumber: 54,
    columnNumber: 3
  },
  this
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
var SelectContent = React18.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsxDEV25(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxDEV25(
  SelectPrimitive.Content,
  {
    ref,
    className: cn(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsxDEV25(SelectScrollUpButton, {}, void 0, !1, {
        fileName: "src/app/components/ui/select.tsx",
        lineNumber: 84,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV25(
        SelectPrimitive.Viewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        },
        void 0,
        !1,
        {
          fileName: "src/app/components/ui/select.tsx",
          lineNumber: 85,
          columnNumber: 7
        },
        this
      ),
      /* @__PURE__ */ jsxDEV25(SelectScrollDownButton, {}, void 0, !1, {
        fileName: "src/app/components/ui/select.tsx",
        lineNumber: 94,
        columnNumber: 7
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "src/app/components/ui/select.tsx",
    lineNumber: 73,
    columnNumber: 5
  },
  this
) }, void 0, !1, {
  fileName: "src/app/components/ui/select.tsx",
  lineNumber: 72,
  columnNumber: 3
}, this));
SelectContent.displayName = SelectPrimitive.Content.displayName;
var SelectLabel = React18.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV25(
  SelectPrimitive.Label,
  {
    ref,
    className: cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/select.tsx",
    lineNumber: 104,
    columnNumber: 3
  },
  this
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
var SelectItem = React18.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDEV25(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxDEV25("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxDEV25(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsxDEV25(Check2, { className: "h-4 w-4" }, void 0, !1, {
        fileName: "src/app/components/ui/select.tsx",
        lineNumber: 126,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "src/app/components/ui/select.tsx",
        lineNumber: 125,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "src/app/components/ui/select.tsx",
        lineNumber: 124,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV25(SelectPrimitive.ItemText, { children }, void 0, !1, {
        fileName: "src/app/components/ui/select.tsx",
        lineNumber: 130,
        columnNumber: 5
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "src/app/components/ui/select.tsx",
    lineNumber: 116,
    columnNumber: 3
  },
  this
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
var SelectSeparator = React18.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV25(
  SelectPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/select.tsx",
    lineNumber: 139,
    columnNumber: 3
  },
  this
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

// src/app/components/ui/calendar.tsx
import { ChevronLeft, ChevronRight as ChevronRight2 } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { jsxDEV as jsxDEV26 } from "react/jsx-dev-runtime";
function Calendar({
  className,
  classNames,
  showOutsideDays = !0,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV26(
    DayPicker,
    {
      showOutsideDays,
      className: cn("p-3", className),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_end: "day-range-end",
        day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside: "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames
      },
      components: {
        IconLeft: ({ ..._props }) => /* @__PURE__ */ jsxDEV26(ChevronLeft, { className: "h-4 w-4" }, void 0, !1, {
          fileName: "src/app/components/ui/calendar.tsx",
          lineNumber: 55,
          columnNumber: 38
        }, this),
        IconRight: ({ ..._props }) => /* @__PURE__ */ jsxDEV26(ChevronRight2, { className: "h-4 w-4" }, void 0, !1, {
          fileName: "src/app/components/ui/calendar.tsx",
          lineNumber: 56,
          columnNumber: 39
        }, this)
      },
      ...props
    },
    void 0,
    !1,
    {
      fileName: "src/app/components/ui/calendar.tsx",
      lineNumber: 17,
      columnNumber: 5
    },
    this
  );
}
Calendar.displayName = "Calendar";

// src/app/components/ui/popover.tsx
import * as React19 from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { jsxDEV as jsxDEV27 } from "react/jsx-dev-runtime";
var Popover = PopoverPrimitive.Root, PopoverTrigger = PopoverPrimitive.Trigger, PopoverContent = React19.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxDEV27(PopoverPrimitive.Portal, { children: /* @__PURE__ */ jsxDEV27(
  PopoverPrimitive.Content,
  {
    ref,
    align,
    sideOffset,
    className: cn(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/popover.tsx",
    lineNumber: 15,
    columnNumber: 5
  },
  this
) }, void 0, !1, {
  fileName: "src/app/components/ui/popover.tsx",
  lineNumber: 14,
  columnNumber: 3
}, this));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

// src/app/components/budget/AddBudgetDialog.tsx
import { CalendarIcon, Loader2 } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { toast as toast3 } from "sonner";
import { jsxDEV as jsxDEV28 } from "react/jsx-dev-runtime";
var CATEGORIES = [
  { value: "", label: "Todas as categorias" },
  { value: "Moradia", label: "Moradia" },
  { value: "Alimenta\xE7\xE3o", label: "Alimenta\xE7\xE3o" },
  { value: "Transporte", label: "Transporte" },
  { value: "Lazer", label: "Lazer" },
  { value: "Sa\xFAde", label: "Sa\xFAde" },
  { value: "Educa\xE7\xE3o", label: "Educa\xE7\xE3o" },
  { value: "Servi\xE7os", label: "Servi\xE7os" },
  { value: "Outros", label: "Outros" }
], AddBudgetDialog = ({
  open,
  onOpenChange,
  onSuccess
}) => {
  let [name, setName] = useState6(""), [amount, setAmount] = useState6(""), [category, setCategory] = useState6(""), [startDate, setStartDate] = useState6(/* @__PURE__ */ new Date()), [endDate, setEndDate] = useState6(/* @__PURE__ */ new Date()), [isSubmitting, setIsSubmitting] = useState6(!1), resetForm = () => {
    setName(""), setAmount(""), setCategory(""), setStartDate(/* @__PURE__ */ new Date()), setEndDate(/* @__PURE__ */ new Date());
  };
  return /* @__PURE__ */ jsxDEV28(Dialog, { open, onOpenChange, children: /* @__PURE__ */ jsxDEV28(DialogContent, { className: "sm:max-w-[500px]", children: /* @__PURE__ */ jsxDEV28("form", { onSubmit: async (e) => {
    e.preventDefault();
    try {
      if (setIsSubmitting(!0), !name || !amount || !startDate || !endDate) {
        toast3.error("Preencha todos os campos obrigat\xF3rios");
        return;
      }
      let amountNumber = parseFloat(amount.replace(",", "."));
      if (isNaN(amountNumber) || amountNumber <= 0) {
        toast3.error("Valor inv\xE1lido");
        return;
      }
      if (endDate < startDate) {
        toast3.error("A data final deve ser posterior \xE0 data inicial");
        return;
      }
      let { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        toast3.error("Usu\xE1rio n\xE3o autenticado");
        return;
      }
      let { error } = await supabase.from("budgets").insert({
        name,
        amount: amountNumber,
        category: category || null,
        start_date: format(startDate, "yyyy-MM-dd"),
        end_date: format(endDate, "yyyy-MM-dd"),
        user_id: user.id
      });
      if (error)
        throw error;
      toast3.success("Or\xE7amento criado", {
        description: "Seu or\xE7amento foi criado com sucesso."
      }), resetForm(), onOpenChange(!1), onSuccess();
    } catch (error) {
      console.error("Error creating budget:", error), toast3.error("Erro ao criar or\xE7amento", {
        description: error.message || "Tente novamente mais tarde."
      });
    } finally {
      setIsSubmitting(!1);
    }
  }, children: [
    /* @__PURE__ */ jsxDEV28(DialogHeader, { children: [
      /* @__PURE__ */ jsxDEV28(DialogTitle, { children: "Novo Or\xE7amento" }, void 0, !1, {
        fileName: "src/app/components/budget/AddBudgetDialog.tsx",
        lineNumber: 137,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV28(DialogDescription, { children: "Defina um or\xE7amento para controlar seus gastos." }, void 0, !1, {
        fileName: "src/app/components/budget/AddBudgetDialog.tsx",
        lineNumber: 138,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "src/app/components/budget/AddBudgetDialog.tsx",
      lineNumber: 136,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV28("div", { className: "grid gap-4 py-4", children: [
      /* @__PURE__ */ jsxDEV28("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ jsxDEV28(Label2, { htmlFor: "name", children: "Nome do or\xE7amento" }, void 0, !1, {
          fileName: "src/app/components/budget/AddBudgetDialog.tsx",
          lineNumber: 145,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV28(
          Input,
          {
            id: "name",
            value: name,
            onChange: (e) => setName(e.target.value),
            placeholder: "Ex: Or\xE7amento mensal, Viagem, etc.",
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "src/app/components/budget/AddBudgetDialog.tsx",
            lineNumber: 146,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "src/app/components/budget/AddBudgetDialog.tsx",
        lineNumber: 144,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV28("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ jsxDEV28(Label2, { htmlFor: "amount", children: "Valor do or\xE7amento (R$)" }, void 0, !1, {
          fileName: "src/app/components/budget/AddBudgetDialog.tsx",
          lineNumber: 156,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV28(
          Input,
          {
            id: "amount",
            value: amount,
            onChange: (e) => setAmount(e.target.value),
            placeholder: "0,00",
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "src/app/components/budget/AddBudgetDialog.tsx",
            lineNumber: 157,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "src/app/components/budget/AddBudgetDialog.tsx",
        lineNumber: 155,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV28("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ jsxDEV28(Label2, { htmlFor: "category", children: "Categoria (opcional)" }, void 0, !1, {
          fileName: "src/app/components/budget/AddBudgetDialog.tsx",
          lineNumber: 167,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV28(Select, { value: category, onValueChange: setCategory, children: [
          /* @__PURE__ */ jsxDEV28(SelectTrigger, { children: /* @__PURE__ */ jsxDEV28(SelectValue, { placeholder: "Selecione uma categoria" }, void 0, !1, {
            fileName: "src/app/components/budget/AddBudgetDialog.tsx",
            lineNumber: 170,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "src/app/components/budget/AddBudgetDialog.tsx",
            lineNumber: 169,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV28(SelectContent, { children: CATEGORIES.map((category2) => /* @__PURE__ */ jsxDEV28(SelectItem, { value: category2.value, children: category2.label }, category2.value, !1, {
            fileName: "src/app/components/budget/AddBudgetDialog.tsx",
            lineNumber: 174,
            columnNumber: 21
          }, this)) }, void 0, !1, {
            fileName: "src/app/components/budget/AddBudgetDialog.tsx",
            lineNumber: 172,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "src/app/components/budget/AddBudgetDialog.tsx",
          lineNumber: 168,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "src/app/components/budget/AddBudgetDialog.tsx",
        lineNumber: 166,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV28("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxDEV28("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsxDEV28(Label2, { children: "Data inicial" }, void 0, !1, {
            fileName: "src/app/components/budget/AddBudgetDialog.tsx",
            lineNumber: 184,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV28(Popover, { children: [
            /* @__PURE__ */ jsxDEV28(PopoverTrigger, { asChild: !0, children: /* @__PURE__ */ jsxDEV28(
              Button,
              {
                variant: "outline",
                className: cn(
                  "w-full justify-start text-left font-normal",
                  !startDate && "text-muted-foreground"
                ),
                children: [
                  /* @__PURE__ */ jsxDEV28(CalendarIcon, { className: "mr-2 h-4 w-4" }, void 0, !1, {
                    fileName: "src/app/components/budget/AddBudgetDialog.tsx",
                    lineNumber: 194,
                    columnNumber: 23
                  }, this),
                  startDate ? format(startDate, "dd/MM/yyyy", { locale: ptBR }) : /* @__PURE__ */ jsxDEV28("span", { children: "Selecione uma data" }, void 0, !1, {
                    fileName: "src/app/components/budget/AddBudgetDialog.tsx",
                    lineNumber: 198,
                    columnNumber: 25
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "src/app/components/budget/AddBudgetDialog.tsx",
                lineNumber: 187,
                columnNumber: 21
              },
              this
            ) }, void 0, !1, {
              fileName: "src/app/components/budget/AddBudgetDialog.tsx",
              lineNumber: 186,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV28(PopoverContent, { className: "w-auto p-0", children: /* @__PURE__ */ jsxDEV28(
              Calendar,
              {
                mode: "single",
                selected: startDate,
                onSelect: (date) => date && setStartDate(date),
                initialFocus: !0
              },
              void 0,
              !1,
              {
                fileName: "src/app/components/budget/AddBudgetDialog.tsx",
                lineNumber: 203,
                columnNumber: 21
              },
              this
            ) }, void 0, !1, {
              fileName: "src/app/components/budget/AddBudgetDialog.tsx",
              lineNumber: 202,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "src/app/components/budget/AddBudgetDialog.tsx",
            lineNumber: 185,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "src/app/components/budget/AddBudgetDialog.tsx",
          lineNumber: 183,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV28("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsxDEV28(Label2, { children: "Data final" }, void 0, !1, {
            fileName: "src/app/components/budget/AddBudgetDialog.tsx",
            lineNumber: 214,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV28(Popover, { children: [
            /* @__PURE__ */ jsxDEV28(PopoverTrigger, { asChild: !0, children: /* @__PURE__ */ jsxDEV28(
              Button,
              {
                variant: "outline",
                className: cn(
                  "w-full justify-start text-left font-normal",
                  !endDate && "text-muted-foreground"
                ),
                children: [
                  /* @__PURE__ */ jsxDEV28(CalendarIcon, { className: "mr-2 h-4 w-4" }, void 0, !1, {
                    fileName: "src/app/components/budget/AddBudgetDialog.tsx",
                    lineNumber: 224,
                    columnNumber: 23
                  }, this),
                  endDate ? format(endDate, "dd/MM/yyyy", { locale: ptBR }) : /* @__PURE__ */ jsxDEV28("span", { children: "Selecione uma data" }, void 0, !1, {
                    fileName: "src/app/components/budget/AddBudgetDialog.tsx",
                    lineNumber: 228,
                    columnNumber: 25
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "src/app/components/budget/AddBudgetDialog.tsx",
                lineNumber: 217,
                columnNumber: 21
              },
              this
            ) }, void 0, !1, {
              fileName: "src/app/components/budget/AddBudgetDialog.tsx",
              lineNumber: 216,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV28(PopoverContent, { className: "w-auto p-0", children: /* @__PURE__ */ jsxDEV28(
              Calendar,
              {
                mode: "single",
                selected: endDate,
                onSelect: (date) => date && setEndDate(date),
                initialFocus: !0
              },
              void 0,
              !1,
              {
                fileName: "src/app/components/budget/AddBudgetDialog.tsx",
                lineNumber: 233,
                columnNumber: 21
              },
              this
            ) }, void 0, !1, {
              fileName: "src/app/components/budget/AddBudgetDialog.tsx",
              lineNumber: 232,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "src/app/components/budget/AddBudgetDialog.tsx",
            lineNumber: 215,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "src/app/components/budget/AddBudgetDialog.tsx",
          lineNumber: 213,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "src/app/components/budget/AddBudgetDialog.tsx",
        lineNumber: 182,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "src/app/components/budget/AddBudgetDialog.tsx",
      lineNumber: 143,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV28(DialogFooter, { children: [
      /* @__PURE__ */ jsxDEV28(Button, { variant: "outline", type: "button", onClick: () => onOpenChange(!1), children: "Cancelar" }, void 0, !1, {
        fileName: "src/app/components/budget/AddBudgetDialog.tsx",
        lineNumber: 246,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV28(Button, { type: "submit", disabled: isSubmitting, children: isSubmitting ? /* @__PURE__ */ jsxDEV28(Loader2, { className: "h-4 w-4 mr-2 animate-spin" }, void 0, !1, {
        fileName: "src/app/components/budget/AddBudgetDialog.tsx",
        lineNumber: 251,
        columnNumber: 17
      }, this) : "Criar Or\xE7amento" }, void 0, !1, {
        fileName: "src/app/components/budget/AddBudgetDialog.tsx",
        lineNumber: 249,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "src/app/components/budget/AddBudgetDialog.tsx",
      lineNumber: 245,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "src/app/components/budget/AddBudgetDialog.tsx",
    lineNumber: 135,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "src/app/components/budget/AddBudgetDialog.tsx",
    lineNumber: 134,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "src/app/components/budget/AddBudgetDialog.tsx",
    lineNumber: 133,
    columnNumber: 5
  }, this);
};

// src/app/components/budget/BudgetPage.tsx
import { format as format2 } from "date-fns";
import { ptBR as ptBR2 } from "date-fns/locale";
import { jsxDEV as jsxDEV29 } from "react/jsx-dev-runtime";
var BudgetPage = () => {
  let [isLoading, setIsLoading] = useState7(!0), [budgets, setBudgets] = useState7([]), [isAddBudgetOpen, setIsAddBudgetOpen] = useState7(!1), fetchBudgets = async () => {
    try {
      setIsLoading(!0);
      let { data: budgetsData, error: budgetsError } = await supabase.from("budgets").select("*").order("created_at", { ascending: !1 });
      if (budgetsError) {
        console.error("Error fetching budgets:", budgetsError), toast4.error("Erro ao carregar or\xE7amentos");
        return;
      }
      let budgetsWithSpent = await Promise.all(
        (budgetsData || []).map(async (budget) => {
          let query = supabase.from("transactions").select("amount").eq("type", "expense").gte("date", budget.start_date).lte("date", budget.end_date);
          budget.category && query.eq("category", budget.category);
          let { data: transactions, error: transactionsError } = await query;
          if (transactionsError)
            return console.error("Error fetching transactions:", transactionsError), {
              ...budget,
              spent: 0,
              percentage: 0
            };
          let spent = transactions?.reduce((sum, tx) => sum + parseFloat(tx.amount.toString()), 0) || 0, percentage = spent / parseFloat(budget.amount.toString()) * 100;
          return {
            ...budget,
            spent,
            percentage
          };
        })
      );
      setBudgets(budgetsWithSpent);
    } catch (error) {
      console.error("Error:", error), toast4.error("Erro ao carregar or\xE7amentos");
    } finally {
      setIsLoading(!1);
    }
  };
  return useEffect5(() => {
    fetchBudgets();
  }, []), /* @__PURE__ */ jsxDEV29("div", { className: "space-y-8 pb-16 md:pb-8", children: [
    /* @__PURE__ */ jsxDEV29("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxDEV29("div", { children: [
        /* @__PURE__ */ jsxDEV29("h1", { className: "text-3xl font-bold tracking-tight", children: "Or\xE7amentos" }, void 0, !1, {
          fileName: "src/app/components/budget/BudgetPage.tsx",
          lineNumber: 105,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV29("p", { className: "text-muted-foreground", children: "Defina limites de gastos e acompanhe seus or\xE7amentos." }, void 0, !1, {
          fileName: "src/app/components/budget/BudgetPage.tsx",
          lineNumber: 106,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "src/app/components/budget/BudgetPage.tsx",
        lineNumber: 104,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV29(Button, { onClick: () => setIsAddBudgetOpen(!0), children: [
        /* @__PURE__ */ jsxDEV29(PlusCircle3, { className: "h-4 w-4 mr-2" }, void 0, !1, {
          fileName: "src/app/components/budget/BudgetPage.tsx",
          lineNumber: 111,
          columnNumber: 11
        }, this),
        "Novo Or\xE7amento"
      ] }, void 0, !0, {
        fileName: "src/app/components/budget/BudgetPage.tsx",
        lineNumber: 110,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "src/app/components/budget/BudgetPage.tsx",
      lineNumber: 103,
      columnNumber: 7
    }, this),
    isLoading ? /* @__PURE__ */ jsxDEV29("div", { className: "flex justify-center items-center py-12", children: /* @__PURE__ */ jsxDEV29(Loader22, { className: "h-8 w-8 animate-spin text-primary" }, void 0, !1, {
      fileName: "src/app/components/budget/BudgetPage.tsx",
      lineNumber: 118,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "src/app/components/budget/BudgetPage.tsx",
      lineNumber: 117,
      columnNumber: 9
    }, this) : budgets.length === 0 ? /* @__PURE__ */ jsxDEV29(Card, { children: /* @__PURE__ */ jsxDEV29(CardContent, { className: "flex flex-col items-center justify-center py-12", children: [
      /* @__PURE__ */ jsxDEV29("div", { className: "rounded-full bg-muted p-4 mb-4", children: /* @__PURE__ */ jsxDEV29(AlertTriangle, { className: "h-8 w-8 text-muted-foreground" }, void 0, !1, {
        fileName: "src/app/components/budget/BudgetPage.tsx",
        lineNumber: 124,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "src/app/components/budget/BudgetPage.tsx",
        lineNumber: 123,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV29("h3", { className: "text-lg font-medium mb-2", children: "Nenhum or\xE7amento definido" }, void 0, !1, {
        fileName: "src/app/components/budget/BudgetPage.tsx",
        lineNumber: 126,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV29("p", { className: "text-center text-muted-foreground mb-6 max-w-md", children: "Crie or\xE7amentos para definir limites de gastos e acompanhar suas despesas em diferentes categorias." }, void 0, !1, {
        fileName: "src/app/components/budget/BudgetPage.tsx",
        lineNumber: 127,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV29(Button, { onClick: () => setIsAddBudgetOpen(!0), children: [
        /* @__PURE__ */ jsxDEV29(PlusCircle3, { className: "h-4 w-4 mr-2" }, void 0, !1, {
          fileName: "src/app/components/budget/BudgetPage.tsx",
          lineNumber: 131,
          columnNumber: 15
        }, this),
        "Criar Or\xE7amento"
      ] }, void 0, !0, {
        fileName: "src/app/components/budget/BudgetPage.tsx",
        lineNumber: 130,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "src/app/components/budget/BudgetPage.tsx",
      lineNumber: 122,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "src/app/components/budget/BudgetPage.tsx",
      lineNumber: 121,
      columnNumber: 9
    }, this) : /* @__PURE__ */ jsxDEV29("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: budgets.map((budget) => /* @__PURE__ */ jsxDEV29(Card, { className: "overflow-hidden", children: [
      /* @__PURE__ */ jsxDEV29(CardHeader, { className: "pb-2", children: [
        /* @__PURE__ */ jsxDEV29(CardTitle, { className: "text-xl", children: budget.name }, void 0, !1, {
          fileName: "src/app/components/budget/BudgetPage.tsx",
          lineNumber: 141,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV29("div", { className: "text-sm text-muted-foreground", children: [
          format2(new Date(budget.start_date), "dd MMM", { locale: ptBR2 }),
          " -",
          " ",
          format2(new Date(budget.end_date), "dd MMM yyyy", { locale: ptBR2 })
        ] }, void 0, !0, {
          fileName: "src/app/components/budget/BudgetPage.tsx",
          lineNumber: 142,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "src/app/components/budget/BudgetPage.tsx",
        lineNumber: 140,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV29(CardContent, { className: "space-y-4", children: [
        /* @__PURE__ */ jsxDEV29("div", { children: [
          /* @__PURE__ */ jsxDEV29("div", { className: "flex justify-between mb-1", children: [
            /* @__PURE__ */ jsxDEV29("span", { className: "text-sm", children: budget.category || "Todas as categorias" }, void 0, !1, {
              fileName: "src/app/components/budget/BudgetPage.tsx",
              lineNumber: 150,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV29("span", { className: "text-sm", children: [
              Math.round(budget.percentage),
              "%"
            ] }, void 0, !0, {
              fileName: "src/app/components/budget/BudgetPage.tsx",
              lineNumber: 153,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "src/app/components/budget/BudgetPage.tsx",
            lineNumber: 149,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV29(
            Progress,
            {
              value: budget.percentage,
              className: "h-2",
              indicatorClassName: cn(
                budget.percentage >= 100 ? "bg-expense" : budget.percentage >= 75 ? "bg-warning" : "bg-income"
              )
            },
            void 0,
            !1,
            {
              fileName: "src/app/components/budget/BudgetPage.tsx",
              lineNumber: 157,
              columnNumber: 19
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "src/app/components/budget/BudgetPage.tsx",
          lineNumber: 148,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV29("div", { className: "flex justify-between items-center", children: [
          /* @__PURE__ */ jsxDEV29("div", { children: [
            /* @__PURE__ */ jsxDEV29("p", { className: "text-sm text-muted-foreground", children: "Gasto" }, void 0, !1, {
              fileName: "src/app/components/budget/BudgetPage.tsx",
              lineNumber: 170,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV29("p", { className: cn(
              "text-lg font-bold",
              budget.percentage >= 100 ? "text-expense" : ""
            ), children: [
              "R$ ",
              budget.spent.toFixed(2)
            ] }, void 0, !0, {
              fileName: "src/app/components/budget/BudgetPage.tsx",
              lineNumber: 171,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "src/app/components/budget/BudgetPage.tsx",
            lineNumber: 169,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV29("div", { className: "text-right", children: [
            /* @__PURE__ */ jsxDEV29("p", { className: "text-sm text-muted-foreground", children: "Or\xE7amento" }, void 0, !1, {
              fileName: "src/app/components/budget/BudgetPage.tsx",
              lineNumber: 179,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV29("p", { className: "text-lg font-medium", children: [
              "R$ ",
              parseFloat(budget.amount.toString()).toFixed(2)
            ] }, void 0, !0, {
              fileName: "src/app/components/budget/BudgetPage.tsx",
              lineNumber: 180,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "src/app/components/budget/BudgetPage.tsx",
            lineNumber: 178,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "src/app/components/budget/BudgetPage.tsx",
          lineNumber: 168,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "src/app/components/budget/BudgetPage.tsx",
        lineNumber: 147,
        columnNumber: 15
      }, this)
    ] }, budget.id, !0, {
      fileName: "src/app/components/budget/BudgetPage.tsx",
      lineNumber: 139,
      columnNumber: 13
    }, this)) }, void 0, !1, {
      fileName: "src/app/components/budget/BudgetPage.tsx",
      lineNumber: 137,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV29(
      AddBudgetDialog,
      {
        open: isAddBudgetOpen,
        onOpenChange: setIsAddBudgetOpen,
        onSuccess: fetchBudgets
      },
      void 0,
      !1,
      {
        fileName: "src/app/components/budget/BudgetPage.tsx",
        lineNumber: 191,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "src/app/components/budget/BudgetPage.tsx",
    lineNumber: 102,
    columnNumber: 5
  }, this);
};

// src/app/routes/orcamentos.tsx
import { jsxDEV as jsxDEV30 } from "react/jsx-dev-runtime";
function BudgetRoute() {
  return /* @__PURE__ */ jsxDEV30(AppLayout, { children: /* @__PURE__ */ jsxDEV30(BudgetPage, {}, void 0, !1, {
    fileName: "src/app/routes/orcamentos.tsx",
    lineNumber: 7,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "src/app/routes/orcamentos.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// src/app/routes/analytics.tsx
var analytics_exports = {};
__export(analytics_exports, {
  default: () => AnalyticsRoute
});

// src/app/components/analytics/AnalyticsPage.tsx
import { useState as useState12 } from "react";
import { format as format6 } from "date-fns";
import { ptBR as ptBR3 } from "date-fns/locale";

// src/app/components/ui/tabs.tsx
import * as React22 from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { jsxDEV as jsxDEV31 } from "react/jsx-dev-runtime";
var Tabs = TabsPrimitive.Root, TabsList = React22.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV31(
  TabsPrimitive.List,
  {
    ref,
    className: cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/tabs.tsx",
    lineNumber: 12,
    columnNumber: 3
  },
  this
));
TabsList.displayName = TabsPrimitive.List.displayName;
var TabsTrigger = React22.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV31(
  TabsPrimitive.Trigger,
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/tabs.tsx",
    lineNumber: 27,
    columnNumber: 3
  },
  this
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
var TabsContent = React22.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV31(
  TabsPrimitive.Content,
  {
    ref,
    className: cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/tabs.tsx",
    lineNumber: 42,
    columnNumber: 3
  },
  this
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

// src/app/components/analytics/AnalyticsPage.tsx
import { CalendarIcon as CalendarIcon2 } from "lucide-react";

// src/app/components/analytics/ExpenseChart.tsx
import { useEffect as useEffect6, useState as useState8 } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as Tooltip2,
  ResponsiveContainer
} from "recharts";
import { format as format3, subMonths, parseISO } from "date-fns";
import { Loader2 as Loader23 } from "lucide-react";
import { jsxDEV as jsxDEV32 } from "react/jsx-dev-runtime";
var monthNames = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"], CustomTooltip = ({ active, payload, label }) => active && payload && payload.length ? /* @__PURE__ */ jsxDEV32("div", { className: "p-4 border border-border rounded-md bg-background shadow-md", children: [
  /* @__PURE__ */ jsxDEV32("p", { className: "font-medium text-sm text-muted-foreground", children: label }, void 0, !1, {
    fileName: "src/app/components/analytics/ExpenseChart.tsx",
    lineNumber: 29,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ jsxDEV32("p", { className: "font-bold text-md text-verde", children: [
    "Receitas: R$ ",
    payload[1].value.toFixed(2)
  ] }, void 0, !0, {
    fileName: "src/app/components/analytics/ExpenseChart.tsx",
    lineNumber: 30,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ jsxDEV32("p", { className: "font-bold text-md text-vermelho", children: [
    "Despesas: R$ ",
    payload[0].value.toFixed(2)
  ] }, void 0, !0, {
    fileName: "src/app/components/analytics/ExpenseChart.tsx",
    lineNumber: 33,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ jsxDEV32("p", { className: "font-bold text-md", children: [
    "Saldo: R$ ",
    (payload[1].value - payload[0].value).toFixed(2)
  ] }, void 0, !0, {
    fileName: "src/app/components/analytics/ExpenseChart.tsx",
    lineNumber: 36,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "src/app/components/analytics/ExpenseChart.tsx",
  lineNumber: 28,
  columnNumber: 7
}, this) : null, ExpenseChart = () => {
  let [data, setData] = useState8([]), [isLoading, setIsLoading] = useState8(!0);
  return useEffect6(() => {
    (async () => {
      try {
        setIsLoading(!0);
        let today = /* @__PURE__ */ new Date(), startDate = format3(subMonths(today, 11), "yyyy-MM-01"), endDate = format3(today, "yyyy-MM-dd"), { data: transactions, error } = await supabase.from("transactions").select("amount, type, date").gte("date", startDate).lte("date", endDate).order("date", { ascending: !0 });
        if (error) {
          console.error("Error fetching transaction history:", error);
          return;
        }
        let monthlyData = /* @__PURE__ */ new Map();
        for (let i = 0; i < 12; i++) {
          let date = subMonths(today, i), monthYear = format3(date, "yyyy-MM");
          monthlyData.set(monthYear, { expenses: 0, income: 0 });
        }
        transactions?.forEach((transaction) => {
          let monthYear = transaction.date.substring(0, 7), currentData = monthlyData.get(monthYear) || { expenses: 0, income: 0 };
          transaction.type === "expense" ? currentData.expenses += Number(transaction.amount) : currentData.income += Number(transaction.amount), monthlyData.set(monthYear, currentData);
        });
        let chartData = Array.from(monthlyData.entries()).map(([monthYear, values]) => ({
          name: monthNames[parseInt(monthYear.split("-")[1]) - 1],
          despesas: Number(values.expenses),
          receitas: Number(values.income),
          date: parseISO(`${monthYear}-01`)
        })).sort((a, b) => a.date.getTime() - b.date.getTime());
        setData(chartData);
      } catch (error) {
        console.error("Error fetching transaction history:", error);
      } finally {
        setIsLoading(!1);
      }
    })();
  }, []), isLoading ? /* @__PURE__ */ jsxDEV32("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ jsxDEV32(Loader23, { className: "h-8 w-8 animate-spin text-muted-foreground" }, void 0, !1, {
    fileName: "src/app/components/analytics/ExpenseChart.tsx",
    lineNumber: 114,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "src/app/components/analytics/ExpenseChart.tsx",
    lineNumber: 113,
    columnNumber: 7
  }, this) : /* @__PURE__ */ jsxDEV32(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxDEV32(
    AreaChart,
    {
      data,
      margin: {
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      },
      children: [
        /* @__PURE__ */ jsxDEV32(CartesianGrid, { strokeDasharray: "3 3", opacity: 0.2 }, void 0, !1, {
          fileName: "src/app/components/analytics/ExpenseChart.tsx",
          lineNumber: 130,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV32(XAxis, { dataKey: "name" }, void 0, !1, {
          fileName: "src/app/components/analytics/ExpenseChart.tsx",
          lineNumber: 131,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV32(YAxis, {}, void 0, !1, {
          fileName: "src/app/components/analytics/ExpenseChart.tsx",
          lineNumber: 132,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV32(Tooltip2, { content: /* @__PURE__ */ jsxDEV32(CustomTooltip, {}, void 0, !1, {
          fileName: "src/app/components/analytics/ExpenseChart.tsx",
          lineNumber: 133,
          columnNumber: 27
        }, this) }, void 0, !1, {
          fileName: "src/app/components/analytics/ExpenseChart.tsx",
          lineNumber: 133,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV32(
          Area,
          {
            type: "monotone",
            dataKey: "despesas",
            stroke: "#E63946",
            fill: "#E63946",
            fillOpacity: 0.2,
            activeDot: { r: 6 }
          },
          void 0,
          !1,
          {
            fileName: "src/app/components/analytics/ExpenseChart.tsx",
            lineNumber: 134,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ jsxDEV32(
          Area,
          {
            type: "monotone",
            dataKey: "receitas",
            stroke: "#2A9D8F",
            fill: "#2A9D8F",
            fillOpacity: 0.2,
            activeDot: { r: 6 }
          },
          void 0,
          !1,
          {
            fileName: "src/app/components/analytics/ExpenseChart.tsx",
            lineNumber: 142,
            columnNumber: 9
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "src/app/components/analytics/ExpenseChart.tsx",
      lineNumber: 121,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "src/app/components/analytics/ExpenseChart.tsx",
    lineNumber: 120,
    columnNumber: 5
  }, this);
};

// src/app/components/analytics/ExpenseByCategoryChart.tsx
import { useEffect as useEffect7, useState as useState9 } from "react";
import { PieChart as PieChart3, Pie, Cell, ResponsiveContainer as ResponsiveContainer2, Legend, Tooltip as Tooltip3 } from "recharts";
import { format as format4 } from "date-fns";
import { Loader2 as Loader24 } from "lucide-react";
import { jsxDEV as jsxDEV33 } from "react/jsx-dev-runtime";
var expenseCategoryColors = {
  Moradia: "#E63946",
  Alimenta\u00E7\u00E3o: "#F1C0B9",
  Transporte: "#A8DADC",
  Lazer: "#457B9D",
  Sa\u00FAde: "#F3722C",
  Educa\u00E7\u00E3o: "#F8961E",
  Servi\u00E7os: "#577590",
  Outros: "#1D3557"
}, incomeCategoryColors = {
  Sal\u00E1rio: "#2A9D8F",
  Freelance: "#8AB17D",
  Investimentos: "#BABB74",
  Presentes: "#E9C46A",
  Outros: "#F4A261"
}, CustomTooltip2 = ({ active, payload }) => active && payload && payload.length ? /* @__PURE__ */ jsxDEV33("div", { className: "bg-background p-3 border border-border rounded-md shadow-md", children: [
  /* @__PURE__ */ jsxDEV33("p", { className: "font-medium", children: `${payload[0].name}` }, void 0, !1, {
    fileName: "src/app/components/analytics/ExpenseByCategoryChart.tsx",
    lineNumber: 42,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ jsxDEV33("p", { className: "font-bold text-lg", children: `R$ ${payload[0].value.toFixed(2)}` }, void 0, !1, {
    fileName: "src/app/components/analytics/ExpenseByCategoryChart.tsx",
    lineNumber: 43,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "src/app/components/analytics/ExpenseByCategoryChart.tsx",
  lineNumber: 41,
  columnNumber: 7
}, this) : null, ExpenseByCategoryChart = ({
  isIncome = !1,
  selectedDate = /* @__PURE__ */ new Date()
}) => {
  let [data, setData] = useState9([]), [isLoading, setIsLoading] = useState9(!0);
  return useEffect7(() => {
    (async () => {
      try {
        setIsLoading(!0);
        let currentMonth = format4(selectedDate, "MM"), currentYear = format4(selectedDate, "yyyy"), startDate = `${currentYear}-${currentMonth}-01`, lastDay = new Date(parseInt(currentYear), parseInt(currentMonth), 0).getDate(), endDate = `${currentYear}-${currentMonth}-${lastDay}`, { data: data2, error } = await supabase.from("transactions").select("category, amount").eq("type", isIncome ? "income" : "expense").gte("date", startDate).lte("date", endDate);
        if (error) {
          console.error(`Error fetching ${isIncome ? "income" : "expense"} by category:`, error);
          return;
        }
        let categoryMap = /* @__PURE__ */ new Map();
        data2?.forEach((transaction) => {
          let currentAmount = categoryMap.get(transaction.category) || 0;
          categoryMap.set(transaction.category, currentAmount + Number(transaction.amount));
        });
        let colors = isIncome ? incomeCategoryColors : expenseCategoryColors, chartData = Array.from(categoryMap.entries()).map(([name, value]) => ({
          name,
          value: Number(value),
          color: colors[name] || (isIncome ? "#2A9D8F" : "#1D3557")
        }));
        setData(chartData.length > 0 ? chartData : [{
          name: isIncome ? "Sem receitas" : "Sem despesas",
          value: 1,
          color: "#ccc"
        }]);
      } catch (error) {
        console.error(`Error calculating ${isIncome ? "income" : "expense"} by category:`, error);
      } finally {
        setIsLoading(!1);
      }
    })();
  }, [isIncome, selectedDate]), isLoading ? /* @__PURE__ */ jsxDEV33("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ jsxDEV33(Loader24, { className: "h-8 w-8 animate-spin text-muted-foreground" }, void 0, !1, {
    fileName: "src/app/components/analytics/ExpenseByCategoryChart.tsx",
    lineNumber: 113,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "src/app/components/analytics/ExpenseByCategoryChart.tsx",
    lineNumber: 112,
    columnNumber: 7
  }, this) : data.length === 0 || data.length === 1 && (data[0].name === "Sem receitas" || data[0].name === "Sem despesas") ? /* @__PURE__ */ jsxDEV33("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ jsxDEV33("p", { className: "text-muted-foreground text-center", children: isIncome ? "Nenhuma receita registrada para o per\xEDodo selecionado." : "Nenhuma despesa registrada para o per\xEDodo selecionado." }, void 0, !1, {
    fileName: "src/app/components/analytics/ExpenseByCategoryChart.tsx",
    lineNumber: 121,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "src/app/components/analytics/ExpenseByCategoryChart.tsx",
    lineNumber: 120,
    columnNumber: 7
  }, this) : /* @__PURE__ */ jsxDEV33(ResponsiveContainer2, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxDEV33(PieChart3, { children: [
    /* @__PURE__ */ jsxDEV33(
      Pie,
      {
        data,
        cx: "50%",
        cy: "50%",
        innerRadius: 60,
        outerRadius: 80,
        paddingAngle: 5,
        dataKey: "value",
        label: ({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`,
        labelLine: !1,
        children: data.map((entry2, index) => /* @__PURE__ */ jsxDEV33(Cell, { fill: entry2.color }, `cell-${index}`, !1, {
          fileName: "src/app/components/analytics/ExpenseByCategoryChart.tsx",
          lineNumber: 145,
          columnNumber: 13
        }, this))
      },
      void 0,
      !1,
      {
        fileName: "src/app/components/analytics/ExpenseByCategoryChart.tsx",
        lineNumber: 133,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV33(Tooltip3, { content: /* @__PURE__ */ jsxDEV33(CustomTooltip2, {}, void 0, !1, {
      fileName: "src/app/components/analytics/ExpenseByCategoryChart.tsx",
      lineNumber: 148,
      columnNumber: 27
    }, this) }, void 0, !1, {
      fileName: "src/app/components/analytics/ExpenseByCategoryChart.tsx",
      lineNumber: 148,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV33(
      Legend,
      {
        layout: "vertical",
        verticalAlign: "middle",
        align: "right",
        wrapperStyle: { paddingLeft: "10px" }
      },
      void 0,
      !1,
      {
        fileName: "src/app/components/analytics/ExpenseByCategoryChart.tsx",
        lineNumber: 149,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "src/app/components/analytics/ExpenseByCategoryChart.tsx",
    lineNumber: 132,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "src/app/components/analytics/ExpenseByCategoryChart.tsx",
    lineNumber: 131,
    columnNumber: 5
  }, this);
};

// src/app/components/analytics/IncomeChart.tsx
import { useEffect as useEffect8, useState as useState10 } from "react";
import {
  BarChart,
  Bar,
  XAxis as XAxis2,
  YAxis as YAxis2,
  CartesianGrid as CartesianGrid2,
  Tooltip as Tooltip4,
  ResponsiveContainer as ResponsiveContainer3
} from "recharts";
import { format as format5, subMonths as subMonths2, parseISO as parseISO2 } from "date-fns";
import { Loader2 as Loader25 } from "lucide-react";
import { jsxDEV as jsxDEV34 } from "react/jsx-dev-runtime";
var monthNames2 = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"], CustomTooltip3 = ({ active, payload, label }) => active && payload && payload.length ? /* @__PURE__ */ jsxDEV34("div", { className: "p-4 border border-border rounded-md bg-background shadow-md", children: [
  /* @__PURE__ */ jsxDEV34("p", { className: "font-medium text-sm text-muted-foreground", children: label }, void 0, !1, {
    fileName: "src/app/components/analytics/IncomeChart.tsx",
    lineNumber: 28,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ jsxDEV34("p", { className: "font-bold text-md text-verde", children: [
    "Receita: R$ ",
    payload[0].value.toFixed(2)
  ] }, void 0, !0, {
    fileName: "src/app/components/analytics/IncomeChart.tsx",
    lineNumber: 29,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "src/app/components/analytics/IncomeChart.tsx",
  lineNumber: 27,
  columnNumber: 7
}, this) : null, IncomeChart = () => {
  let [data, setData] = useState10([]), [isLoading, setIsLoading] = useState10(!0);
  return useEffect8(() => {
    (async () => {
      try {
        setIsLoading(!0);
        let today = /* @__PURE__ */ new Date(), startDate = format5(subMonths2(today, 11), "yyyy-MM-01"), endDate = format5(today, "yyyy-MM-dd"), { data: incomeData, error } = await supabase.from("transactions").select("amount, date").eq("type", "income").gte("date", startDate).lte("date", endDate).order("date", { ascending: !0 });
        if (error) {
          console.error("Error fetching income history:", error);
          return;
        }
        let monthlyData = /* @__PURE__ */ new Map();
        for (let i = 0; i < 12; i++) {
          let date = subMonths2(today, i), monthYear = format5(date, "yyyy-MM");
          monthlyData.set(monthYear, 0);
        }
        incomeData?.forEach((transaction) => {
          let monthYear = transaction.date.substring(0, 7), currentAmount = monthlyData.get(monthYear) || 0;
          monthlyData.set(monthYear, currentAmount + Number(transaction.amount));
        });
        let chartData = Array.from(monthlyData.entries()).map(([monthYear, value]) => ({
          name: monthNames2[parseInt(monthYear.split("-")[1]) - 1],
          valor: Number(value),
          date: parseISO2(`${monthYear}-01`)
        })).sort((a, b) => a.date.getTime() - b.date.getTime());
        setData(chartData);
      } catch (error) {
        console.error("Error fetching income history:", error);
      } finally {
        setIsLoading(!1);
      }
    })();
  }, []), isLoading ? /* @__PURE__ */ jsxDEV34("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ jsxDEV34(Loader25, { className: "h-8 w-8 animate-spin text-muted-foreground" }, void 0, !1, {
    fileName: "src/app/components/analytics/IncomeChart.tsx",
    lineNumber: 100,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "src/app/components/analytics/IncomeChart.tsx",
    lineNumber: 99,
    columnNumber: 7
  }, this) : /* @__PURE__ */ jsxDEV34(ResponsiveContainer3, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxDEV34(
    BarChart,
    {
      data,
      margin: {
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      },
      children: [
        /* @__PURE__ */ jsxDEV34(CartesianGrid2, { strokeDasharray: "3 3", opacity: 0.2 }, void 0, !1, {
          fileName: "src/app/components/analytics/IncomeChart.tsx",
          lineNumber: 116,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV34(XAxis2, { dataKey: "name" }, void 0, !1, {
          fileName: "src/app/components/analytics/IncomeChart.tsx",
          lineNumber: 117,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV34(YAxis2, {}, void 0, !1, {
          fileName: "src/app/components/analytics/IncomeChart.tsx",
          lineNumber: 118,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV34(Tooltip4, { content: /* @__PURE__ */ jsxDEV34(CustomTooltip3, {}, void 0, !1, {
          fileName: "src/app/components/analytics/IncomeChart.tsx",
          lineNumber: 119,
          columnNumber: 27
        }, this) }, void 0, !1, {
          fileName: "src/app/components/analytics/IncomeChart.tsx",
          lineNumber: 119,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV34(Bar, { dataKey: "valor", fill: "#2A9D8F", radius: [4, 4, 0, 0] }, void 0, !1, {
          fileName: "src/app/components/analytics/IncomeChart.tsx",
          lineNumber: 120,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "src/app/components/analytics/IncomeChart.tsx",
      lineNumber: 107,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "src/app/components/analytics/IncomeChart.tsx",
    lineNumber: 106,
    columnNumber: 5
  }, this);
};

// src/app/components/analytics/TransactionTable.tsx
import { useEffect as useEffect9, useState as useState11 } from "react";

// src/app/components/ui/table.tsx
import * as React26 from "react";
import { jsxDEV as jsxDEV35 } from "react/jsx-dev-runtime";
var Table = React26.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV35("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ jsxDEV35(
  "table",
  {
    ref,
    className: cn("w-full caption-bottom text-sm", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/table.tsx",
    lineNumber: 10,
    columnNumber: 5
  },
  this
) }, void 0, !1, {
  fileName: "src/app/components/ui/table.tsx",
  lineNumber: 9,
  columnNumber: 3
}, this));
Table.displayName = "Table";
var TableHeader = React26.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV35("thead", { ref, className: cn("[&_tr]:border-b", className), ...props }, void 0, !1, {
  fileName: "src/app/components/ui/table.tsx",
  lineNumber: 23,
  columnNumber: 3
}, this));
TableHeader.displayName = "TableHeader";
var TableBody = React26.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV35(
  "tbody",
  {
    ref,
    className: cn("[&_tr:last-child]:border-0", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/table.tsx",
    lineNumber: 31,
    columnNumber: 3
  },
  this
));
TableBody.displayName = "TableBody";
var TableFooter = React26.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV35(
  "tfoot",
  {
    ref,
    className: cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/table.tsx",
    lineNumber: 43,
    columnNumber: 3
  },
  this
));
TableFooter.displayName = "TableFooter";
var TableRow = React26.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV35(
  "tr",
  {
    ref,
    className: cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/table.tsx",
    lineNumber: 58,
    columnNumber: 3
  },
  this
));
TableRow.displayName = "TableRow";
var TableHead = React26.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV35(
  "th",
  {
    ref,
    className: cn(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/table.tsx",
    lineNumber: 73,
    columnNumber: 3
  },
  this
));
TableHead.displayName = "TableHead";
var TableCell = React26.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV35(
  "td",
  {
    ref,
    className: cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/table.tsx",
    lineNumber: 88,
    columnNumber: 3
  },
  this
));
TableCell.displayName = "TableCell";
var TableCaption = React26.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV35(
  "caption",
  {
    ref,
    className: cn("mt-4 text-sm text-muted-foreground", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/table.tsx",
    lineNumber: 100,
    columnNumber: 3
  },
  this
));
TableCaption.displayName = "TableCaption";

// src/app/components/ui/badge.tsx
import { cva as cva6 } from "class-variance-authority";
import { jsxDEV as jsxDEV36 } from "react/jsx-dev-runtime";
var badgeVariants = cva6(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ jsxDEV36("div", { className: cn(badgeVariants({ variant }), className), ...props }, void 0, !1, {
    fileName: "src/app/components/ui/badge.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
}

// src/app/components/analytics/TransactionTable.tsx
import { Loader2 as Loader26 } from "lucide-react";
import { jsxDEV as jsxDEV37 } from "react/jsx-dev-runtime";
var TransactionTable = ({ type }) => {
  let [transactions, setTransactions] = useState11([]), [isLoading, setIsLoading] = useState11(!0);
  return useEffect9(() => {
    (async () => {
      try {
        setIsLoading(!0);
        let { data, error } = await supabase.from("transactions").select("*, wallet:wallets(id, name)").eq("type", type === "expenses" ? "expense" : "income").order("date", { ascending: !1 });
        error ? console.error(`Error fetching ${type}:`, error) : setTransactions(data || []);
      } catch (error) {
        console.error(`Error fetching ${type}:`, error);
      } finally {
        setIsLoading(!1);
      }
    })();
  }, [type]), isLoading ? /* @__PURE__ */ jsxDEV37("div", { className: "flex justify-center items-center py-8", children: /* @__PURE__ */ jsxDEV37(Loader26, { className: "h-8 w-8 animate-spin text-muted-foreground" }, void 0, !1, {
    fileName: "src/app/components/analytics/TransactionTable.tsx",
    lineNumber: 69,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "src/app/components/analytics/TransactionTable.tsx",
    lineNumber: 68,
    columnNumber: 7
  }, this) : transactions.length === 0 ? /* @__PURE__ */ jsxDEV37("div", { className: "text-center py-8", children: /* @__PURE__ */ jsxDEV37("p", { className: "text-muted-foreground", children: type === "expenses" ? "Nenhuma despesa registrada" : "Nenhuma receita registrada" }, void 0, !1, {
    fileName: "src/app/components/analytics/TransactionTable.tsx",
    lineNumber: 77,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "src/app/components/analytics/TransactionTable.tsx",
    lineNumber: 76,
    columnNumber: 7
  }, this) : /* @__PURE__ */ jsxDEV37(Table, { children: [
    /* @__PURE__ */ jsxDEV37(TableHeader, { children: /* @__PURE__ */ jsxDEV37(TableRow, { children: [
      /* @__PURE__ */ jsxDEV37(TableHead, { children: "Data" }, void 0, !1, {
        fileName: "src/app/components/analytics/TransactionTable.tsx",
        lineNumber: 90,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV37(TableHead, { children: "Nome" }, void 0, !1, {
        fileName: "src/app/components/analytics/TransactionTable.tsx",
        lineNumber: 91,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV37(TableHead, { children: "Categoria" }, void 0, !1, {
        fileName: "src/app/components/analytics/TransactionTable.tsx",
        lineNumber: 92,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV37(TableHead, { children: "Carteira" }, void 0, !1, {
        fileName: "src/app/components/analytics/TransactionTable.tsx",
        lineNumber: 93,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV37(TableHead, { className: "text-right", children: "Valor" }, void 0, !1, {
        fileName: "src/app/components/analytics/TransactionTable.tsx",
        lineNumber: 94,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV37(TableHead, { className: "text-center", children: "Recorrente" }, void 0, !1, {
        fileName: "src/app/components/analytics/TransactionTable.tsx",
        lineNumber: 95,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "src/app/components/analytics/TransactionTable.tsx",
      lineNumber: 89,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "src/app/components/analytics/TransactionTable.tsx",
      lineNumber: 88,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV37(TableBody, { children: transactions.map((transaction) => /* @__PURE__ */ jsxDEV37(TableRow, { children: [
      /* @__PURE__ */ jsxDEV37(TableCell, { className: "font-medium", children: new Date(transaction.date).toLocaleDateString("pt-BR") }, void 0, !1, {
        fileName: "src/app/components/analytics/TransactionTable.tsx",
        lineNumber: 101,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV37(TableCell, { children: transaction.name }, void 0, !1, {
        fileName: "src/app/components/analytics/TransactionTable.tsx",
        lineNumber: 104,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV37(TableCell, { children: transaction.category }, void 0, !1, {
        fileName: "src/app/components/analytics/TransactionTable.tsx",
        lineNumber: 105,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV37(TableCell, { children: transaction.wallet?.name || "Carteira removida" }, void 0, !1, {
        fileName: "src/app/components/analytics/TransactionTable.tsx",
        lineNumber: 106,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV37(TableCell, { className: "text-right font-medium", children: /* @__PURE__ */ jsxDEV37(
        "span",
        {
          className: cn(
            type === "expenses" ? "text-expense" : "text-income"
          ),
          children: [
            type === "expenses" ? "-" : "+",
            "R$",
            " ",
            transaction.amount.toFixed(2)
          ]
        },
        void 0,
        !0,
        {
          fileName: "src/app/components/analytics/TransactionTable.tsx",
          lineNumber: 108,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "src/app/components/analytics/TransactionTable.tsx",
        lineNumber: 107,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV37(TableCell, { className: "text-center", children: transaction.recurrent ? /* @__PURE__ */ jsxDEV37(
        Badge,
        {
          variant: "outline",
          className: "bg-accent text-accent-foreground",
          children: "Mensal"
        },
        void 0,
        !1,
        {
          fileName: "src/app/components/analytics/TransactionTable.tsx",
          lineNumber: 119,
          columnNumber: 17
        },
        this
      ) : /* @__PURE__ */ jsxDEV37("span", { className: "text-muted-foreground", children: "-" }, void 0, !1, {
        fileName: "src/app/components/analytics/TransactionTable.tsx",
        lineNumber: 126,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "src/app/components/analytics/TransactionTable.tsx",
        lineNumber: 117,
        columnNumber: 13
      }, this)
    ] }, transaction.id, !0, {
      fileName: "src/app/components/analytics/TransactionTable.tsx",
      lineNumber: 100,
      columnNumber: 11
    }, this)) }, void 0, !1, {
      fileName: "src/app/components/analytics/TransactionTable.tsx",
      lineNumber: 98,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "src/app/components/analytics/TransactionTable.tsx",
    lineNumber: 87,
    columnNumber: 5
  }, this);
};

// src/app/components/analytics/AnalyticsPage.tsx
import { jsxDEV as jsxDEV38 } from "react/jsx-dev-runtime";
var AnalyticsPage = () => {
  let [selectedDate, setSelectedDate] = useState12(/* @__PURE__ */ new Date());
  return /* @__PURE__ */ jsxDEV38("div", { className: "space-y-8 pb-16 md:pb-8", children: [
    /* @__PURE__ */ jsxDEV38("div", { className: "flex flex-col md:flex-row md:items-center md:justify-between gap-4", children: [
      /* @__PURE__ */ jsxDEV38("div", { children: [
        /* @__PURE__ */ jsxDEV38("h1", { className: "text-3xl font-bold tracking-tight", children: "An\xE1lise Financeira" }, void 0, !1, {
          fileName: "src/app/components/analytics/AnalyticsPage.tsx",
          lineNumber: 27,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV38("p", { className: "text-muted-foreground", children: "Visualize e analise seus gastos e receitas." }, void 0, !1, {
          fileName: "src/app/components/analytics/AnalyticsPage.tsx",
          lineNumber: 28,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "src/app/components/analytics/AnalyticsPage.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV38("div", { className: "flex items-center space-x-2", children: /* @__PURE__ */ jsxDEV38(Popover, { children: [
        /* @__PURE__ */ jsxDEV38(PopoverTrigger, { asChild: !0, children: /* @__PURE__ */ jsxDEV38(Button, { variant: "outline", className: "w-[14rem] justify-start text-left font-normal", children: [
          /* @__PURE__ */ jsxDEV38(CalendarIcon2, { className: "mr-2 h-4 w-4" }, void 0, !1, {
            fileName: "src/app/components/analytics/AnalyticsPage.tsx",
            lineNumber: 36,
            columnNumber: 17
          }, this),
          format6(selectedDate, "MMMM yyyy", { locale: ptBR3 })
        ] }, void 0, !0, {
          fileName: "src/app/components/analytics/AnalyticsPage.tsx",
          lineNumber: 35,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "src/app/components/analytics/AnalyticsPage.tsx",
          lineNumber: 34,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV38(PopoverContent, { className: "w-auto p-0", align: "end", children: /* @__PURE__ */ jsxDEV38(
          Calendar,
          {
            mode: "single",
            selected: selectedDate,
            onSelect: (date) => date && setSelectedDate(date),
            initialFocus: !0,
            className: cn("p-3 pointer-events-auto")
          },
          void 0,
          !1,
          {
            fileName: "src/app/components/analytics/AnalyticsPage.tsx",
            lineNumber: 41,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "src/app/components/analytics/AnalyticsPage.tsx",
          lineNumber: 40,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "src/app/components/analytics/AnalyticsPage.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "src/app/components/analytics/AnalyticsPage.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "src/app/components/analytics/AnalyticsPage.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV38(Tabs, { defaultValue: "overview", className: "space-y-8", children: [
      /* @__PURE__ */ jsxDEV38(TabsList, { className: "grid w-full grid-cols-3", children: [
        /* @__PURE__ */ jsxDEV38(TabsTrigger, { value: "overview", children: "Vis\xE3o Geral" }, void 0, !1, {
          fileName: "src/app/components/analytics/AnalyticsPage.tsx",
          lineNumber: 55,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV38(TabsTrigger, { value: "expenses", children: "Despesas" }, void 0, !1, {
          fileName: "src/app/components/analytics/AnalyticsPage.tsx",
          lineNumber: 56,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV38(TabsTrigger, { value: "income", children: "Receitas" }, void 0, !1, {
          fileName: "src/app/components/analytics/AnalyticsPage.tsx",
          lineNumber: 57,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "src/app/components/analytics/AnalyticsPage.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV38(TabsContent, { value: "overview", children: /* @__PURE__ */ jsxDEV38("div", { className: "grid gap-6 md:grid-cols-3", children: [
        /* @__PURE__ */ jsxDEV38(Card, { className: "glass card-hover md:col-span-2", children: [
          /* @__PURE__ */ jsxDEV38(CardHeader, { children: /* @__PURE__ */ jsxDEV38(CardTitle, { children: "Balan\xE7o Mensal" }, void 0, !1, {
            fileName: "src/app/components/analytics/AnalyticsPage.tsx",
            lineNumber: 64,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "src/app/components/analytics/AnalyticsPage.tsx",
            lineNumber: 63,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV38(CardContent, { className: "h-[300px]", children: /* @__PURE__ */ jsxDEV38(ExpenseChart, {}, void 0, !1, {
            fileName: "src/app/components/analytics/AnalyticsPage.tsx",
            lineNumber: 67,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "src/app/components/analytics/AnalyticsPage.tsx",
            lineNumber: 66,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "src/app/components/analytics/AnalyticsPage.tsx",
          lineNumber: 62,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV38(Card, { className: "glass card-hover", children: [
          /* @__PURE__ */ jsxDEV38(CardHeader, { children: /* @__PURE__ */ jsxDEV38(CardTitle, { children: "Despesas por Categoria" }, void 0, !1, {
            fileName: "src/app/components/analytics/AnalyticsPage.tsx",
            lineNumber: 72,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "src/app/components/analytics/AnalyticsPage.tsx",
            lineNumber: 71,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV38(CardContent, { className: "h-[300px]", children: /* @__PURE__ */ jsxDEV38(ExpenseByCategoryChart, {}, void 0, !1, {
            fileName: "src/app/components/analytics/AnalyticsPage.tsx",
            lineNumber: 75,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "src/app/components/analytics/AnalyticsPage.tsx",
            lineNumber: 74,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "src/app/components/analytics/AnalyticsPage.tsx",
          lineNumber: 70,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "src/app/components/analytics/AnalyticsPage.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "src/app/components/analytics/AnalyticsPage.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV38(TabsContent, { value: "expenses", children: /* @__PURE__ */ jsxDEV38("div", { className: "grid gap-6 md:grid-cols-3", children: [
        /* @__PURE__ */ jsxDEV38(Card, { className: "glass card-hover md:col-span-2", children: [
          /* @__PURE__ */ jsxDEV38(CardHeader, { children: /* @__PURE__ */ jsxDEV38(CardTitle, { children: "Evolu\xE7\xE3o de Despesas" }, void 0, !1, {
            fileName: "src/app/components/analytics/AnalyticsPage.tsx",
            lineNumber: 85,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "src/app/components/analytics/AnalyticsPage.tsx",
            lineNumber: 84,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV38(CardContent, { className: "h-[300px]", children: /* @__PURE__ */ jsxDEV38(ExpenseChart, {}, void 0, !1, {
            fileName: "src/app/components/analytics/AnalyticsPage.tsx",
            lineNumber: 88,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "src/app/components/analytics/AnalyticsPage.tsx",
            lineNumber: 87,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "src/app/components/analytics/AnalyticsPage.tsx",
          lineNumber: 83,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV38(Card, { className: "glass card-hover", children: [
          /* @__PURE__ */ jsxDEV38(CardHeader, { children: /* @__PURE__ */ jsxDEV38(CardTitle, { children: "Por Categoria" }, void 0, !1, {
            fileName: "src/app/components/analytics/AnalyticsPage.tsx",
            lineNumber: 93,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "src/app/components/analytics/AnalyticsPage.tsx",
            lineNumber: 92,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV38(CardContent, { className: "h-[300px]", children: /* @__PURE__ */ jsxDEV38(ExpenseByCategoryChart, {}, void 0, !1, {
            fileName: "src/app/components/analytics/AnalyticsPage.tsx",
            lineNumber: 96,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "src/app/components/analytics/AnalyticsPage.tsx",
            lineNumber: 95,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "src/app/components/analytics/AnalyticsPage.tsx",
          lineNumber: 91,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV38(Card, { className: "glass card-hover md:col-span-3", children: [
          /* @__PURE__ */ jsxDEV38(CardHeader, { children: /* @__PURE__ */ jsxDEV38(CardTitle, { children: "Detalhamento de Despesas" }, void 0, !1, {
            fileName: "src/app/components/analytics/AnalyticsPage.tsx",
            lineNumber: 101,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "src/app/components/analytics/AnalyticsPage.tsx",
            lineNumber: 100,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV38(CardContent, { children: /* @__PURE__ */ jsxDEV38(TransactionTable, { type: "expenses" }, void 0, !1, {
            fileName: "src/app/components/analytics/AnalyticsPage.tsx",
            lineNumber: 104,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "src/app/components/analytics/AnalyticsPage.tsx",
            lineNumber: 103,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "src/app/components/analytics/AnalyticsPage.tsx",
          lineNumber: 99,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "src/app/components/analytics/AnalyticsPage.tsx",
        lineNumber: 82,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "src/app/components/analytics/AnalyticsPage.tsx",
        lineNumber: 81,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV38(TabsContent, { value: "income", children: /* @__PURE__ */ jsxDEV38("div", { className: "grid gap-6 md:grid-cols-3", children: [
        /* @__PURE__ */ jsxDEV38(Card, { className: "glass card-hover md:col-span-2", children: [
          /* @__PURE__ */ jsxDEV38(CardHeader, { children: /* @__PURE__ */ jsxDEV38(CardTitle, { children: "Evolu\xE7\xE3o de Receitas" }, void 0, !1, {
            fileName: "src/app/components/analytics/AnalyticsPage.tsx",
            lineNumber: 114,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "src/app/components/analytics/AnalyticsPage.tsx",
            lineNumber: 113,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV38(CardContent, { className: "h-[300px]", children: /* @__PURE__ */ jsxDEV38(IncomeChart, {}, void 0, !1, {
            fileName: "src/app/components/analytics/AnalyticsPage.tsx",
            lineNumber: 117,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "src/app/components/analytics/AnalyticsPage.tsx",
            lineNumber: 116,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "src/app/components/analytics/AnalyticsPage.tsx",
          lineNumber: 112,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV38(Card, { className: "glass card-hover", children: [
          /* @__PURE__ */ jsxDEV38(CardHeader, { children: /* @__PURE__ */ jsxDEV38(CardTitle, { children: "Receitas por Categoria" }, void 0, !1, {
            fileName: "src/app/components/analytics/AnalyticsPage.tsx",
            lineNumber: 122,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "src/app/components/analytics/AnalyticsPage.tsx",
            lineNumber: 121,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV38(CardContent, { className: "h-[300px]", children: /* @__PURE__ */ jsxDEV38(ExpenseByCategoryChart, { isIncome: !0 }, void 0, !1, {
            fileName: "src/app/components/analytics/AnalyticsPage.tsx",
            lineNumber: 125,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "src/app/components/analytics/AnalyticsPage.tsx",
            lineNumber: 124,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "src/app/components/analytics/AnalyticsPage.tsx",
          lineNumber: 120,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV38(Card, { className: "glass card-hover md:col-span-3", children: [
          /* @__PURE__ */ jsxDEV38(CardHeader, { children: /* @__PURE__ */ jsxDEV38(CardTitle, { children: "Detalhamento de Receitas" }, void 0, !1, {
            fileName: "src/app/components/analytics/AnalyticsPage.tsx",
            lineNumber: 130,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "src/app/components/analytics/AnalyticsPage.tsx",
            lineNumber: 129,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV38(CardContent, { children: /* @__PURE__ */ jsxDEV38(TransactionTable, { type: "income" }, void 0, !1, {
            fileName: "src/app/components/analytics/AnalyticsPage.tsx",
            lineNumber: 133,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "src/app/components/analytics/AnalyticsPage.tsx",
            lineNumber: 132,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "src/app/components/analytics/AnalyticsPage.tsx",
          lineNumber: 128,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "src/app/components/analytics/AnalyticsPage.tsx",
        lineNumber: 111,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "src/app/components/analytics/AnalyticsPage.tsx",
        lineNumber: 110,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "src/app/components/analytics/AnalyticsPage.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "src/app/components/analytics/AnalyticsPage.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
};

// src/app/routes/analytics.tsx
import { jsxDEV as jsxDEV39 } from "react/jsx-dev-runtime";
function AnalyticsRoute() {
  return /* @__PURE__ */ jsxDEV39(AppLayout, { children: /* @__PURE__ */ jsxDEV39(AnalyticsPage, {}, void 0, !1, {
    fileName: "src/app/routes/analytics.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "src/app/routes/analytics.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// src/app/routes/carteiras.tsx
var carteiras_exports = {};
__export(carteiras_exports, {
  default: () => WalletRoute
});

// src/app/components/wallet/WalletPage.tsx
import * as React31 from "react";
import { PlusCircle as PlusCircle4, CreditCard as CreditCard3, Wallet as Wallet3, Trash2, Loader2 as Loader27 } from "lucide-react";

// src/app/components/wallet/AddWalletDialog.tsx
import * as React29 from "react";
import { toast as toast5 } from "sonner";
import { jsxDEV as jsxDEV40 } from "react/jsx-dev-runtime";
var AddWalletDialog = ({
  open,
  onOpenChange,
  onSuccess
}) => {
  let [walletType, setWalletType] = React29.useState("credit-card"), [isSubmitting, setIsSubmitting] = React29.useState(!1), [name, setName] = React29.useState(""), [cardNumber, setCardNumber] = React29.useState(""), [balance, setBalance] = React29.useState(""), [limit, setLimit] = React29.useState(""), [color, setColor] = React29.useState("#E63946"), resetForm = () => {
    setWalletType("credit-card"), setName(""), setCardNumber(""), setBalance(""), setLimit(""), setColor("#E63946");
  };
  return /* @__PURE__ */ jsxDEV40(Dialog, { open, onOpenChange, children: /* @__PURE__ */ jsxDEV40(DialogContent, { className: "sm:max-w-[425px] glass", children: [
    /* @__PURE__ */ jsxDEV40(DialogHeader, { children: [
      /* @__PURE__ */ jsxDEV40(DialogTitle, { children: "Adicionar Nova Carteira" }, void 0, !1, {
        fileName: "src/app/components/wallet/AddWalletDialog.tsx",
        lineNumber: 103,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV40(DialogDescription, { children: "Adicione informa\xE7\xF5es sobre seu cart\xE3o ou conta." }, void 0, !1, {
        fileName: "src/app/components/wallet/AddWalletDialog.tsx",
        lineNumber: 104,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "src/app/components/wallet/AddWalletDialog.tsx",
      lineNumber: 102,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV40("form", { onSubmit: async (e) => {
      e.preventDefault(), setIsSubmitting(!0);
      try {
        let { data: { user } } = await supabase.auth.getUser();
        if (!user)
          throw new Error("User not authenticated");
        let { data, error } = await supabase.from("wallets").insert({
          name,
          balance: parseFloat(balance) || 0,
          limit_amount: walletType === "credit-card" ? parseFloat(limit) || 0 : null,
          type: walletType,
          color,
          card_number: walletType !== "cash" ? cardNumber : null,
          user_id: user.id
        }).select();
        error ? (console.error("Error adding wallet:", error), toast5.error("Erro ao adicionar carteira", {
          description: error.message
        })) : (toast5.success("Carteira adicionada", {
          description: "Sua nova carteira foi registrada com sucesso."
        }), resetForm(), onOpenChange(!1), onSuccess && onSuccess());
      } catch (error) {
        console.error("Error:", error), toast5.error("Erro ao adicionar carteira");
      } finally {
        setIsSubmitting(!1);
      }
    }, children: [
      /* @__PURE__ */ jsxDEV40("div", { className: "grid gap-4 py-4", children: [
        /* @__PURE__ */ jsxDEV40("div", { className: "grid grid-cols-4 items-center gap-4", children: [
          /* @__PURE__ */ jsxDEV40(Label2, { htmlFor: "name", className: "text-right", children: "Nome" }, void 0, !1, {
            fileName: "src/app/components/wallet/AddWalletDialog.tsx",
            lineNumber: 111,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV40(
            Input,
            {
              id: "name",
              placeholder: "Ex: Nubank, Ita\xFA, Dinheiro...",
              className: "col-span-3",
              required: !0,
              value: name,
              onChange: (e) => setName(e.target.value)
            },
            void 0,
            !1,
            {
              fileName: "src/app/components/wallet/AddWalletDialog.tsx",
              lineNumber: 114,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "src/app/components/wallet/AddWalletDialog.tsx",
          lineNumber: 110,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV40("div", { className: "grid grid-cols-4 items-center gap-4", children: [
          /* @__PURE__ */ jsxDEV40(Label2, { htmlFor: "type", className: "text-right", children: "Tipo" }, void 0, !1, {
            fileName: "src/app/components/wallet/AddWalletDialog.tsx",
            lineNumber: 124,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV40(
            Select,
            {
              value: walletType,
              onValueChange: (value) => setWalletType(value),
              required: !0,
              children: [
                /* @__PURE__ */ jsxDEV40(SelectTrigger, { className: "col-span-3", id: "type", children: /* @__PURE__ */ jsxDEV40(SelectValue, { placeholder: "Selecione o tipo" }, void 0, !1, {
                  fileName: "src/app/components/wallet/AddWalletDialog.tsx",
                  lineNumber: 135,
                  columnNumber: 19
                }, this) }, void 0, !1, {
                  fileName: "src/app/components/wallet/AddWalletDialog.tsx",
                  lineNumber: 134,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV40(SelectContent, { children: [
                  /* @__PURE__ */ jsxDEV40(SelectItem, { value: "credit-card", children: "Cart\xE3o de Cr\xE9dito" }, void 0, !1, {
                    fileName: "src/app/components/wallet/AddWalletDialog.tsx",
                    lineNumber: 138,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV40(SelectItem, { value: "debit-card", children: "Cart\xE3o de D\xE9bito" }, void 0, !1, {
                    fileName: "src/app/components/wallet/AddWalletDialog.tsx",
                    lineNumber: 139,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV40(SelectItem, { value: "cash", children: "Dinheiro / Outros" }, void 0, !1, {
                    fileName: "src/app/components/wallet/AddWalletDialog.tsx",
                    lineNumber: 140,
                    columnNumber: 19
                  }, this)
                ] }, void 0, !0, {
                  fileName: "src/app/components/wallet/AddWalletDialog.tsx",
                  lineNumber: 137,
                  columnNumber: 17
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "src/app/components/wallet/AddWalletDialog.tsx",
              lineNumber: 127,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "src/app/components/wallet/AddWalletDialog.tsx",
          lineNumber: 123,
          columnNumber: 13
        }, this),
        walletType !== "cash" && /* @__PURE__ */ jsxDEV40("div", { className: "grid grid-cols-4 items-center gap-4", children: [
          /* @__PURE__ */ jsxDEV40(Label2, { htmlFor: "cardNumber", className: "text-right", children: "N\xFAmero" }, void 0, !1, {
            fileName: "src/app/components/wallet/AddWalletDialog.tsx",
            lineNumber: 147,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV40(
            Input,
            {
              id: "cardNumber",
              placeholder: "**** **** **** ****",
              className: "col-span-3",
              value: cardNumber,
              onChange: (e) => setCardNumber(e.target.value)
            },
            void 0,
            !1,
            {
              fileName: "src/app/components/wallet/AddWalletDialog.tsx",
              lineNumber: 150,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "src/app/components/wallet/AddWalletDialog.tsx",
          lineNumber: 146,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV40("div", { className: "grid grid-cols-4 items-center gap-4", children: [
          /* @__PURE__ */ jsxDEV40(Label2, { htmlFor: "balance", className: "text-right", children: "Saldo (R$)" }, void 0, !1, {
            fileName: "src/app/components/wallet/AddWalletDialog.tsx",
            lineNumber: 161,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV40(
            Input,
            {
              id: "balance",
              type: "number",
              placeholder: "0,00",
              step: "0.01",
              min: "0",
              className: "col-span-3",
              required: !0,
              value: balance,
              onChange: (e) => setBalance(e.target.value)
            },
            void 0,
            !1,
            {
              fileName: "src/app/components/wallet/AddWalletDialog.tsx",
              lineNumber: 164,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "src/app/components/wallet/AddWalletDialog.tsx",
          lineNumber: 160,
          columnNumber: 13
        }, this),
        walletType === "credit-card" && /* @__PURE__ */ jsxDEV40("div", { className: "grid grid-cols-4 items-center gap-4", children: [
          /* @__PURE__ */ jsxDEV40(Label2, { htmlFor: "limit", className: "text-right", children: "Limite (R$)" }, void 0, !1, {
            fileName: "src/app/components/wallet/AddWalletDialog.tsx",
            lineNumber: 179,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV40(
            Input,
            {
              id: "limit",
              type: "number",
              placeholder: "0,00",
              step: "0.01",
              min: "0",
              className: "col-span-3",
              required: !0,
              value: limit,
              onChange: (e) => setLimit(e.target.value)
            },
            void 0,
            !1,
            {
              fileName: "src/app/components/wallet/AddWalletDialog.tsx",
              lineNumber: 182,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "src/app/components/wallet/AddWalletDialog.tsx",
          lineNumber: 178,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV40("div", { className: "grid grid-cols-4 items-center gap-4", children: [
          /* @__PURE__ */ jsxDEV40(Label2, { htmlFor: "color", className: "text-right", children: "Cor" }, void 0, !1, {
            fileName: "src/app/components/wallet/AddWalletDialog.tsx",
            lineNumber: 197,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV40("div", { className: "col-span-3 flex space-x-2", children: [
            /* @__PURE__ */ jsxDEV40(
              Input,
              {
                id: "color",
                type: "color",
                className: "w-12 h-10 p-1",
                value: color,
                onChange: (e) => setColor(e.target.value)
              },
              void 0,
              !1,
              {
                fileName: "src/app/components/wallet/AddWalletDialog.tsx",
                lineNumber: 201,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ jsxDEV40(
              Input,
              {
                placeholder: "C\xF3digo de cor (Ex: #E63946)",
                className: "flex-1",
                value: color,
                onChange: (e) => setColor(e.target.value)
              },
              void 0,
              !1,
              {
                fileName: "src/app/components/wallet/AddWalletDialog.tsx",
                lineNumber: 208,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "src/app/components/wallet/AddWalletDialog.tsx",
            lineNumber: 200,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "src/app/components/wallet/AddWalletDialog.tsx",
          lineNumber: 196,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "src/app/components/wallet/AddWalletDialog.tsx",
        lineNumber: 109,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV40(DialogFooter, { children: /* @__PURE__ */ jsxDEV40(Button, { type: "submit", disabled: isSubmitting, children: isSubmitting ? "Salvando..." : "Salvar" }, void 0, !1, {
        fileName: "src/app/components/wallet/AddWalletDialog.tsx",
        lineNumber: 218,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "src/app/components/wallet/AddWalletDialog.tsx",
        lineNumber: 217,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "src/app/components/wallet/AddWalletDialog.tsx",
      lineNumber: 108,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "src/app/components/wallet/AddWalletDialog.tsx",
    lineNumber: 101,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "src/app/components/wallet/AddWalletDialog.tsx",
    lineNumber: 100,
    columnNumber: 5
  }, this);
};

// src/app/components/wallet/WalletPage.tsx
import { toast as toast6 } from "sonner";

// src/app/components/ui/alert-dialog.tsx
import * as React30 from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { jsxDEV as jsxDEV41 } from "react/jsx-dev-runtime";
var AlertDialog = AlertDialogPrimitive.Root, AlertDialogTrigger = AlertDialogPrimitive.Trigger, AlertDialogPortal = AlertDialogPrimitive.Portal, AlertDialogOverlay = React30.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV41(
  AlertDialogPrimitive.Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/alert-dialog.tsx",
    lineNumber: 17,
    columnNumber: 3
  },
  this
));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;
var AlertDialogContent = React30.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV41(AlertDialogPortal, { children: [
  /* @__PURE__ */ jsxDEV41(AlertDialogOverlay, {}, void 0, !1, {
    fileName: "src/app/components/ui/alert-dialog.tsx",
    lineNumber: 33,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ jsxDEV41(
    AlertDialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props
    },
    void 0,
    !1,
    {
      fileName: "src/app/components/ui/alert-dialog.tsx",
      lineNumber: 34,
      columnNumber: 5
    },
    this
  )
] }, void 0, !0, {
  fileName: "src/app/components/ui/alert-dialog.tsx",
  lineNumber: 32,
  columnNumber: 3
}, this));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;
var AlertDialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxDEV41(
  "div",
  {
    className: cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/alert-dialog.tsx",
    lineNumber: 50,
    columnNumber: 3
  },
  this
);
AlertDialogHeader.displayName = "AlertDialogHeader";
var AlertDialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxDEV41(
  "div",
  {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/alert-dialog.tsx",
    lineNumber: 64,
    columnNumber: 3
  },
  this
);
AlertDialogFooter.displayName = "AlertDialogFooter";
var AlertDialogTitle = React30.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV41(
  AlertDialogPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/alert-dialog.tsx",
    lineNumber: 78,
    columnNumber: 3
  },
  this
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;
var AlertDialogDescription = React30.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV41(
  AlertDialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/alert-dialog.tsx",
    lineNumber: 90,
    columnNumber: 3
  },
  this
));
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;
var AlertDialogAction = React30.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV41(
  AlertDialogPrimitive.Action,
  {
    ref,
    className: cn(buttonVariants(), className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/alert-dialog.tsx",
    lineNumber: 103,
    columnNumber: 3
  },
  this
));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;
var AlertDialogCancel = React30.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV41(
  AlertDialogPrimitive.Cancel,
  {
    ref,
    className: cn(
      buttonVariants({ variant: "outline" }),
      "mt-2 sm:mt-0",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/alert-dialog.tsx",
    lineNumber: 115,
    columnNumber: 3
  },
  this
));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;

// src/app/components/wallet/WalletPage.tsx
import { jsxDEV as jsxDEV42 } from "react/jsx-dev-runtime";
var WalletPage = () => {
  let [isAddWalletOpen, setIsAddWalletOpen] = React31.useState(!1), [wallets, setWallets] = React31.useState([]), [isLoading, setIsLoading] = React31.useState(!0), [isDeleting, setIsDeleting] = React31.useState(null), fetchWallets = async () => {
    try {
      setIsLoading(!0);
      let { data, error } = await supabase.from("wallets").select("*").order("created_at", { ascending: !1 });
      error ? (console.error("Error fetching wallets:", error), toast6.error("Erro ao carregar carteiras", {
        description: error.message
      })) : setWallets(data || []);
    } catch (error) {
      console.error("Error:", error), toast6.error("Erro ao carregar carteiras");
    } finally {
      setIsLoading(!1);
    }
  };
  React31.useEffect(() => {
    fetchWallets();
  }, []);
  let handleDeleteWallet = async (id) => {
    try {
      setIsDeleting(id);
      let { error } = await supabase.from("wallets").delete().eq("id", id);
      error ? (console.error("Error deleting wallet:", error), toast6.error("Erro ao excluir carteira", {
        description: error.message
      })) : (setWallets(wallets.filter((wallet) => wallet.id !== id)), toast6.success("Carteira exclu\xEDda", {
        description: "A carteira foi exclu\xEDda com sucesso."
      }));
    } catch (error) {
      console.error("Error:", error), toast6.error("Erro ao excluir carteira");
    } finally {
      setIsDeleting(null);
    }
  };
  return /* @__PURE__ */ jsxDEV42("div", { className: "space-y-8 pb-16 md:pb-8", children: [
    /* @__PURE__ */ jsxDEV42("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxDEV42("div", { children: [
        /* @__PURE__ */ jsxDEV42("h1", { className: "text-3xl font-bold tracking-tight", children: "Minhas Carteiras" }, void 0, !1, {
          fileName: "src/app/components/wallet/WalletPage.tsx",
          lineNumber: 97,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV42("p", { className: "text-muted-foreground", children: "Gerencie seus cart\xF5es e contas para controlar melhor seus gastos." }, void 0, !1, {
          fileName: "src/app/components/wallet/WalletPage.tsx",
          lineNumber: 98,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "src/app/components/wallet/WalletPage.tsx",
        lineNumber: 96,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV42(Button, { onClick: () => setIsAddWalletOpen(!0), children: [
        /* @__PURE__ */ jsxDEV42(PlusCircle4, { className: "h-4 w-4 mr-2" }, void 0, !1, {
          fileName: "src/app/components/wallet/WalletPage.tsx",
          lineNumber: 103,
          columnNumber: 11
        }, this),
        "Nova Carteira"
      ] }, void 0, !0, {
        fileName: "src/app/components/wallet/WalletPage.tsx",
        lineNumber: 102,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "src/app/components/wallet/WalletPage.tsx",
      lineNumber: 95,
      columnNumber: 7
    }, this),
    isLoading ? /* @__PURE__ */ jsxDEV42("div", { className: "flex justify-center items-center py-12", children: /* @__PURE__ */ jsxDEV42(Loader27, { className: "h-8 w-8 animate-spin text-muted-foreground" }, void 0, !1, {
      fileName: "src/app/components/wallet/WalletPage.tsx",
      lineNumber: 110,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "src/app/components/wallet/WalletPage.tsx",
      lineNumber: 109,
      columnNumber: 9
    }, this) : /* @__PURE__ */ jsxDEV42(Tabs, { defaultValue: "all", children: [
      /* @__PURE__ */ jsxDEV42(TabsList, { className: "grid w-full grid-cols-3 mb-6", children: [
        /* @__PURE__ */ jsxDEV42(TabsTrigger, { value: "all", children: "Todas" }, void 0, !1, {
          fileName: "src/app/components/wallet/WalletPage.tsx",
          lineNumber: 115,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV42(TabsTrigger, { value: "credit", children: "Cart\xF5es de Cr\xE9dito" }, void 0, !1, {
          fileName: "src/app/components/wallet/WalletPage.tsx",
          lineNumber: 116,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV42(TabsTrigger, { value: "debit", children: "Cart\xF5es de D\xE9bito/Outros" }, void 0, !1, {
          fileName: "src/app/components/wallet/WalletPage.tsx",
          lineNumber: 117,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "src/app/components/wallet/WalletPage.tsx",
        lineNumber: 114,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV42(TabsContent, { value: "all", className: "space-y-6", children: wallets.length === 0 ? /* @__PURE__ */ jsxDEV42("div", { className: "text-center py-12 border border-dashed rounded-lg", children: [
        /* @__PURE__ */ jsxDEV42("p", { className: "text-muted-foreground mb-4", children: "Nenhuma carteira cadastrada" }, void 0, !1, {
          fileName: "src/app/components/wallet/WalletPage.tsx",
          lineNumber: 123,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV42(Button, { onClick: () => setIsAddWalletOpen(!0), children: [
          /* @__PURE__ */ jsxDEV42(PlusCircle4, { className: "h-4 w-4 mr-2" }, void 0, !1, {
            fileName: "src/app/components/wallet/WalletPage.tsx",
            lineNumber: 125,
            columnNumber: 19
          }, this),
          "Adicionar Carteira"
        ] }, void 0, !0, {
          fileName: "src/app/components/wallet/WalletPage.tsx",
          lineNumber: 124,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "src/app/components/wallet/WalletPage.tsx",
        lineNumber: 122,
        columnNumber: 15
      }, this) : /* @__PURE__ */ jsxDEV42("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: wallets.map((wallet) => /* @__PURE__ */ jsxDEV42(Card, { className: "overflow-hidden", children: [
        /* @__PURE__ */ jsxDEV42(
          "div",
          {
            className: "h-2",
            style: { backgroundColor: wallet.color }
          },
          void 0,
          !1,
          {
            fileName: "src/app/components/wallet/WalletPage.tsx",
            lineNumber: 133,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ jsxDEV42(CardHeader, { className: "flex flex-row items-center justify-between pb-2", children: [
          /* @__PURE__ */ jsxDEV42(CardTitle, { className: "text-xl font-bold", children: wallet.name }, void 0, !1, {
            fileName: "src/app/components/wallet/WalletPage.tsx",
            lineNumber: 138,
            columnNumber: 23
          }, this),
          wallet.type === "credit-card" || wallet.type === "debit-card" ? /* @__PURE__ */ jsxDEV42(
            CreditCard3,
            {
              className: "h-5 w-5",
              style: { color: wallet.color }
            },
            void 0,
            !1,
            {
              fileName: "src/app/components/wallet/WalletPage.tsx",
              lineNumber: 140,
              columnNumber: 25
            },
            this
          ) : /* @__PURE__ */ jsxDEV42(
            Wallet3,
            {
              className: "h-5 w-5",
              style: { color: wallet.color }
            },
            void 0,
            !1,
            {
              fileName: "src/app/components/wallet/WalletPage.tsx",
              lineNumber: 145,
              columnNumber: 25
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "src/app/components/wallet/WalletPage.tsx",
          lineNumber: 137,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV42(CardContent, { children: [
          wallet.card_number && /* @__PURE__ */ jsxDEV42("p", { className: "text-sm text-muted-foreground mb-4", children: wallet.card_number }, void 0, !1, {
            fileName: "src/app/components/wallet/WalletPage.tsx",
            lineNumber: 153,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV42("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ jsxDEV42("div", { children: [
              /* @__PURE__ */ jsxDEV42("p", { className: "text-sm text-muted-foreground", children: "Saldo" }, void 0, !1, {
                fileName: "src/app/components/wallet/WalletPage.tsx",
                lineNumber: 159,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ jsxDEV42("p", { className: "text-2xl font-bold", children: [
                "R$ ",
                wallet.balance.toFixed(2)
              ] }, void 0, !0, {
                fileName: "src/app/components/wallet/WalletPage.tsx",
                lineNumber: 160,
                columnNumber: 27
              }, this)
            ] }, void 0, !0, {
              fileName: "src/app/components/wallet/WalletPage.tsx",
              lineNumber: 158,
              columnNumber: 25
            }, this),
            wallet.type === "credit-card" && wallet.limit_amount !== null && /* @__PURE__ */ jsxDEV42("div", { className: "text-right", children: [
              /* @__PURE__ */ jsxDEV42("p", { className: "text-sm text-muted-foreground", children: "Limite" }, void 0, !1, {
                fileName: "src/app/components/wallet/WalletPage.tsx",
                lineNumber: 166,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ jsxDEV42("p", { className: "text-xl font-medium", children: [
                "R$ ",
                wallet.limit_amount.toFixed(2)
              ] }, void 0, !0, {
                fileName: "src/app/components/wallet/WalletPage.tsx",
                lineNumber: 167,
                columnNumber: 29
              }, this)
            ] }, void 0, !0, {
              fileName: "src/app/components/wallet/WalletPage.tsx",
              lineNumber: 165,
              columnNumber: 27
            }, this)
          ] }, void 0, !0, {
            fileName: "src/app/components/wallet/WalletPage.tsx",
            lineNumber: 157,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ jsxDEV42("div", { className: "mt-4 pt-4 border-t border-border flex justify-end", children: /* @__PURE__ */ jsxDEV42(AlertDialog, { children: [
            /* @__PURE__ */ jsxDEV42(AlertDialogTrigger, { asChild: !0, children: /* @__PURE__ */ jsxDEV42(
              Button,
              {
                variant: "ghost",
                size: "sm",
                className: "text-vermelho hover:text-vermelho hover:bg-vermelho/10",
                disabled: isDeleting === wallet.id,
                children: [
                  isDeleting === wallet.id ? /* @__PURE__ */ jsxDEV42(Loader27, { className: "h-4 w-4 mr-1 animate-spin" }, void 0, !1, {
                    fileName: "src/app/components/wallet/WalletPage.tsx",
                    lineNumber: 183,
                    columnNumber: 33
                  }, this) : /* @__PURE__ */ jsxDEV42(Trash2, { className: "h-4 w-4 mr-1" }, void 0, !1, {
                    fileName: "src/app/components/wallet/WalletPage.tsx",
                    lineNumber: 185,
                    columnNumber: 33
                  }, this),
                  "Excluir"
                ]
              },
              void 0,
              !0,
              {
                fileName: "src/app/components/wallet/WalletPage.tsx",
                lineNumber: 176,
                columnNumber: 29
              },
              this
            ) }, void 0, !1, {
              fileName: "src/app/components/wallet/WalletPage.tsx",
              lineNumber: 175,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ jsxDEV42(AlertDialogContent, { children: [
              /* @__PURE__ */ jsxDEV42(AlertDialogHeader, { children: [
                /* @__PURE__ */ jsxDEV42(AlertDialogTitle, { children: "Excluir carteira" }, void 0, !1, {
                  fileName: "src/app/components/wallet/WalletPage.tsx",
                  lineNumber: 192,
                  columnNumber: 31
                }, this),
                /* @__PURE__ */ jsxDEV42(AlertDialogDescription, { children: [
                  'Tem certeza que deseja excluir a carteira "',
                  wallet.name,
                  '"? Esta a\xE7\xE3o n\xE3o pode ser desfeita.'
                ] }, void 0, !0, {
                  fileName: "src/app/components/wallet/WalletPage.tsx",
                  lineNumber: 193,
                  columnNumber: 31
                }, this)
              ] }, void 0, !0, {
                fileName: "src/app/components/wallet/WalletPage.tsx",
                lineNumber: 191,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ jsxDEV42(AlertDialogFooter, { children: [
                /* @__PURE__ */ jsxDEV42(AlertDialogCancel, { children: "Cancelar" }, void 0, !1, {
                  fileName: "src/app/components/wallet/WalletPage.tsx",
                  lineNumber: 198,
                  columnNumber: 31
                }, this),
                /* @__PURE__ */ jsxDEV42(
                  AlertDialogAction,
                  {
                    onClick: () => handleDeleteWallet(wallet.id),
                    className: "bg-vermelho hover:bg-vermelho/90",
                    children: "Excluir"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "src/app/components/wallet/WalletPage.tsx",
                    lineNumber: 199,
                    columnNumber: 31
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "src/app/components/wallet/WalletPage.tsx",
                lineNumber: 197,
                columnNumber: 29
              }, this)
            ] }, void 0, !0, {
              fileName: "src/app/components/wallet/WalletPage.tsx",
              lineNumber: 190,
              columnNumber: 27
            }, this)
          ] }, void 0, !0, {
            fileName: "src/app/components/wallet/WalletPage.tsx",
            lineNumber: 174,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "src/app/components/wallet/WalletPage.tsx",
            lineNumber: 173,
            columnNumber: 23
          }, this)
        ] }, void 0, !0, {
          fileName: "src/app/components/wallet/WalletPage.tsx",
          lineNumber: 151,
          columnNumber: 21
        }, this)
      ] }, wallet.id, !0, {
        fileName: "src/app/components/wallet/WalletPage.tsx",
        lineNumber: 132,
        columnNumber: 19
      }, this)) }, void 0, !1, {
        fileName: "src/app/components/wallet/WalletPage.tsx",
        lineNumber: 130,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "src/app/components/wallet/WalletPage.tsx",
        lineNumber: 120,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV42(TabsContent, { value: "credit", className: "space-y-6", children: /* @__PURE__ */ jsxDEV42("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: wallets.filter((wallet) => wallet.type === "credit-card").map((wallet) => /* @__PURE__ */ jsxDEV42(Card, { className: "overflow-hidden", children: [
        /* @__PURE__ */ jsxDEV42(
          "div",
          {
            className: "h-2",
            style: { backgroundColor: wallet.color }
          },
          void 0,
          !1,
          {
            fileName: "src/app/components/wallet/WalletPage.tsx",
            lineNumber: 222,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ jsxDEV42(CardHeader, { className: "flex flex-row items-center justify-between pb-2", children: [
          /* @__PURE__ */ jsxDEV42(CardTitle, { className: "text-xl font-bold", children: wallet.name }, void 0, !1, {
            fileName: "src/app/components/wallet/WalletPage.tsx",
            lineNumber: 227,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ jsxDEV42(
            CreditCard3,
            {
              className: "h-5 w-5",
              style: { color: wallet.color }
            },
            void 0,
            !1,
            {
              fileName: "src/app/components/wallet/WalletPage.tsx",
              lineNumber: 228,
              columnNumber: 23
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "src/app/components/wallet/WalletPage.tsx",
          lineNumber: 226,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV42(CardContent, { children: [
          wallet.card_number && /* @__PURE__ */ jsxDEV42("p", { className: "text-sm text-muted-foreground mb-4", children: wallet.card_number }, void 0, !1, {
            fileName: "src/app/components/wallet/WalletPage.tsx",
            lineNumber: 235,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV42("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ jsxDEV42("div", { children: [
              /* @__PURE__ */ jsxDEV42("p", { className: "text-sm text-muted-foreground", children: "Saldo" }, void 0, !1, {
                fileName: "src/app/components/wallet/WalletPage.tsx",
                lineNumber: 241,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ jsxDEV42("p", { className: "text-2xl font-bold", children: [
                "R$ ",
                wallet.balance.toFixed(2)
              ] }, void 0, !0, {
                fileName: "src/app/components/wallet/WalletPage.tsx",
                lineNumber: 242,
                columnNumber: 27
              }, this)
            ] }, void 0, !0, {
              fileName: "src/app/components/wallet/WalletPage.tsx",
              lineNumber: 240,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV42("div", { className: "text-right", children: [
              /* @__PURE__ */ jsxDEV42("p", { className: "text-sm text-muted-foreground", children: "Limite" }, void 0, !1, {
                fileName: "src/app/components/wallet/WalletPage.tsx",
                lineNumber: 247,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ jsxDEV42("p", { className: "text-xl font-medium", children: [
                "R$ ",
                wallet.limit_amount?.toFixed(2) || "0.00"
              ] }, void 0, !0, {
                fileName: "src/app/components/wallet/WalletPage.tsx",
                lineNumber: 248,
                columnNumber: 27
              }, this)
            ] }, void 0, !0, {
              fileName: "src/app/components/wallet/WalletPage.tsx",
              lineNumber: 246,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "src/app/components/wallet/WalletPage.tsx",
            lineNumber: 239,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ jsxDEV42("div", { className: "mt-4 pt-4 border-t border-border flex justify-end", children: /* @__PURE__ */ jsxDEV42(AlertDialog, { children: [
            /* @__PURE__ */ jsxDEV42(AlertDialogTrigger, { asChild: !0, children: /* @__PURE__ */ jsxDEV42(
              Button,
              {
                variant: "ghost",
                size: "sm",
                className: "text-vermelho hover:text-vermelho hover:bg-vermelho/10",
                disabled: isDeleting === wallet.id,
                children: [
                  isDeleting === wallet.id ? /* @__PURE__ */ jsxDEV42(Loader27, { className: "h-4 w-4 mr-1 animate-spin" }, void 0, !1, {
                    fileName: "src/app/components/wallet/WalletPage.tsx",
                    lineNumber: 263,
                    columnNumber: 33
                  }, this) : /* @__PURE__ */ jsxDEV42(Trash2, { className: "h-4 w-4 mr-1" }, void 0, !1, {
                    fileName: "src/app/components/wallet/WalletPage.tsx",
                    lineNumber: 265,
                    columnNumber: 33
                  }, this),
                  "Excluir"
                ]
              },
              void 0,
              !0,
              {
                fileName: "src/app/components/wallet/WalletPage.tsx",
                lineNumber: 256,
                columnNumber: 29
              },
              this
            ) }, void 0, !1, {
              fileName: "src/app/components/wallet/WalletPage.tsx",
              lineNumber: 255,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ jsxDEV42(AlertDialogContent, { children: [
              /* @__PURE__ */ jsxDEV42(AlertDialogHeader, { children: [
                /* @__PURE__ */ jsxDEV42(AlertDialogTitle, { children: "Excluir carteira" }, void 0, !1, {
                  fileName: "src/app/components/wallet/WalletPage.tsx",
                  lineNumber: 272,
                  columnNumber: 31
                }, this),
                /* @__PURE__ */ jsxDEV42(AlertDialogDescription, { children: [
                  'Tem certeza que deseja excluir a carteira "',
                  wallet.name,
                  '"? Esta a\xE7\xE3o n\xE3o pode ser desfeita.'
                ] }, void 0, !0, {
                  fileName: "src/app/components/wallet/WalletPage.tsx",
                  lineNumber: 273,
                  columnNumber: 31
                }, this)
              ] }, void 0, !0, {
                fileName: "src/app/components/wallet/WalletPage.tsx",
                lineNumber: 271,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ jsxDEV42(AlertDialogFooter, { children: [
                /* @__PURE__ */ jsxDEV42(AlertDialogCancel, { children: "Cancelar" }, void 0, !1, {
                  fileName: "src/app/components/wallet/WalletPage.tsx",
                  lineNumber: 278,
                  columnNumber: 31
                }, this),
                /* @__PURE__ */ jsxDEV42(
                  AlertDialogAction,
                  {
                    onClick: () => handleDeleteWallet(wallet.id),
                    className: "bg-vermelho hover:bg-vermelho/90",
                    children: "Excluir"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "src/app/components/wallet/WalletPage.tsx",
                    lineNumber: 279,
                    columnNumber: 31
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "src/app/components/wallet/WalletPage.tsx",
                lineNumber: 277,
                columnNumber: 29
              }, this)
            ] }, void 0, !0, {
              fileName: "src/app/components/wallet/WalletPage.tsx",
              lineNumber: 270,
              columnNumber: 27
            }, this)
          ] }, void 0, !0, {
            fileName: "src/app/components/wallet/WalletPage.tsx",
            lineNumber: 254,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "src/app/components/wallet/WalletPage.tsx",
            lineNumber: 253,
            columnNumber: 23
          }, this)
        ] }, void 0, !0, {
          fileName: "src/app/components/wallet/WalletPage.tsx",
          lineNumber: 233,
          columnNumber: 21
        }, this)
      ] }, wallet.id, !0, {
        fileName: "src/app/components/wallet/WalletPage.tsx",
        lineNumber: 221,
        columnNumber: 19
      }, this)) }, void 0, !1, {
        fileName: "src/app/components/wallet/WalletPage.tsx",
        lineNumber: 217,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "src/app/components/wallet/WalletPage.tsx",
        lineNumber: 216,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV42(TabsContent, { value: "debit", className: "space-y-6", children: /* @__PURE__ */ jsxDEV42("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: wallets.filter(
        (wallet) => wallet.type === "debit-card" || wallet.type === "cash"
      ).map((wallet) => /* @__PURE__ */ jsxDEV42(Card, { className: "overflow-hidden", children: [
        /* @__PURE__ */ jsxDEV42(
          "div",
          {
            className: "h-2",
            style: { backgroundColor: wallet.color }
          },
          void 0,
          !1,
          {
            fileName: "src/app/components/wallet/WalletPage.tsx",
            lineNumber: 303,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ jsxDEV42(CardHeader, { className: "flex flex-row items-center justify-between pb-2", children: [
          /* @__PURE__ */ jsxDEV42(CardTitle, { className: "text-xl font-bold", children: wallet.name }, void 0, !1, {
            fileName: "src/app/components/wallet/WalletPage.tsx",
            lineNumber: 308,
            columnNumber: 23
          }, this),
          wallet.type === "debit-card" ? /* @__PURE__ */ jsxDEV42(
            CreditCard3,
            {
              className: "h-5 w-5",
              style: { color: wallet.color }
            },
            void 0,
            !1,
            {
              fileName: "src/app/components/wallet/WalletPage.tsx",
              lineNumber: 310,
              columnNumber: 25
            },
            this
          ) : /* @__PURE__ */ jsxDEV42(
            Wallet3,
            {
              className: "h-5 w-5",
              style: { color: wallet.color }
            },
            void 0,
            !1,
            {
              fileName: "src/app/components/wallet/WalletPage.tsx",
              lineNumber: 315,
              columnNumber: 25
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "src/app/components/wallet/WalletPage.tsx",
          lineNumber: 307,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV42(CardContent, { children: [
          wallet.card_number && /* @__PURE__ */ jsxDEV42("p", { className: "text-sm text-muted-foreground mb-4", children: wallet.card_number }, void 0, !1, {
            fileName: "src/app/components/wallet/WalletPage.tsx",
            lineNumber: 323,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV42("div", { children: [
            /* @__PURE__ */ jsxDEV42("p", { className: "text-sm text-muted-foreground", children: "Saldo" }, void 0, !1, {
              fileName: "src/app/components/wallet/WalletPage.tsx",
              lineNumber: 328,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV42("p", { className: "text-2xl font-bold", children: [
              "R$ ",
              wallet.balance.toFixed(2)
            ] }, void 0, !0, {
              fileName: "src/app/components/wallet/WalletPage.tsx",
              lineNumber: 329,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "src/app/components/wallet/WalletPage.tsx",
            lineNumber: 327,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ jsxDEV42("div", { className: "mt-4 pt-4 border-t border-border flex justify-end", children: /* @__PURE__ */ jsxDEV42(AlertDialog, { children: [
            /* @__PURE__ */ jsxDEV42(AlertDialogTrigger, { asChild: !0, children: /* @__PURE__ */ jsxDEV42(
              Button,
              {
                variant: "ghost",
                size: "sm",
                className: "text-vermelho hover:text-vermelho hover:bg-vermelho/10",
                disabled: isDeleting === wallet.id,
                children: [
                  isDeleting === wallet.id ? /* @__PURE__ */ jsxDEV42(Loader27, { className: "h-4 w-4 mr-1 animate-spin" }, void 0, !1, {
                    fileName: "src/app/components/wallet/WalletPage.tsx",
                    lineNumber: 343,
                    columnNumber: 33
                  }, this) : /* @__PURE__ */ jsxDEV42(Trash2, { className: "h-4 w-4 mr-1" }, void 0, !1, {
                    fileName: "src/app/components/wallet/WalletPage.tsx",
                    lineNumber: 345,
                    columnNumber: 33
                  }, this),
                  "Excluir"
                ]
              },
              void 0,
              !0,
              {
                fileName: "src/app/components/wallet/WalletPage.tsx",
                lineNumber: 336,
                columnNumber: 29
              },
              this
            ) }, void 0, !1, {
              fileName: "src/app/components/wallet/WalletPage.tsx",
              lineNumber: 335,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ jsxDEV42(AlertDialogContent, { children: [
              /* @__PURE__ */ jsxDEV42(AlertDialogHeader, { children: [
                /* @__PURE__ */ jsxDEV42(AlertDialogTitle, { children: "Excluir carteira" }, void 0, !1, {
                  fileName: "src/app/components/wallet/WalletPage.tsx",
                  lineNumber: 352,
                  columnNumber: 31
                }, this),
                /* @__PURE__ */ jsxDEV42(AlertDialogDescription, { children: [
                  'Tem certeza que deseja excluir a carteira "',
                  wallet.name,
                  '"? Esta a\xE7\xE3o n\xE3o pode ser desfeita.'
                ] }, void 0, !0, {
                  fileName: "src/app/components/wallet/WalletPage.tsx",
                  lineNumber: 353,
                  columnNumber: 31
                }, this)
              ] }, void 0, !0, {
                fileName: "src/app/components/wallet/WalletPage.tsx",
                lineNumber: 351,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ jsxDEV42(AlertDialogFooter, { children: [
                /* @__PURE__ */ jsxDEV42(AlertDialogCancel, { children: "Cancelar" }, void 0, !1, {
                  fileName: "src/app/components/wallet/WalletPage.tsx",
                  lineNumber: 358,
                  columnNumber: 31
                }, this),
                /* @__PURE__ */ jsxDEV42(
                  AlertDialogAction,
                  {
                    onClick: () => handleDeleteWallet(wallet.id),
                    className: "bg-vermelho hover:bg-vermelho/90",
                    children: "Excluir"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "src/app/components/wallet/WalletPage.tsx",
                    lineNumber: 359,
                    columnNumber: 31
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "src/app/components/wallet/WalletPage.tsx",
                lineNumber: 357,
                columnNumber: 29
              }, this)
            ] }, void 0, !0, {
              fileName: "src/app/components/wallet/WalletPage.tsx",
              lineNumber: 350,
              columnNumber: 27
            }, this)
          ] }, void 0, !0, {
            fileName: "src/app/components/wallet/WalletPage.tsx",
            lineNumber: 334,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "src/app/components/wallet/WalletPage.tsx",
            lineNumber: 333,
            columnNumber: 23
          }, this)
        ] }, void 0, !0, {
          fileName: "src/app/components/wallet/WalletPage.tsx",
          lineNumber: 321,
          columnNumber: 21
        }, this)
      ] }, wallet.id, !0, {
        fileName: "src/app/components/wallet/WalletPage.tsx",
        lineNumber: 302,
        columnNumber: 19
      }, this)) }, void 0, !1, {
        fileName: "src/app/components/wallet/WalletPage.tsx",
        lineNumber: 296,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "src/app/components/wallet/WalletPage.tsx",
        lineNumber: 295,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "src/app/components/wallet/WalletPage.tsx",
      lineNumber: 113,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV42(
      AddWalletDialog,
      {
        open: isAddWalletOpen,
        onOpenChange: setIsAddWalletOpen,
        onSuccess: fetchWallets
      },
      void 0,
      !1,
      {
        fileName: "src/app/components/wallet/WalletPage.tsx",
        lineNumber: 377,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "src/app/components/wallet/WalletPage.tsx",
    lineNumber: 94,
    columnNumber: 5
  }, this);
};

// src/app/routes/carteiras.tsx
import { jsxDEV as jsxDEV43 } from "react/jsx-dev-runtime";
function WalletRoute() {
  return /* @__PURE__ */ jsxDEV43(AppLayout, { children: /* @__PURE__ */ jsxDEV43(WalletPage, {}, void 0, !1, {
    fileName: "src/app/routes/carteiras.tsx",
    lineNumber: 7,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "src/app/routes/carteiras.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// src/app/routes/dashboard.tsx
var dashboard_exports = {};
__export(dashboard_exports, {
  default: () => DashboardRoute
});

// src/app/components/dashboard/DashboardPage.tsx
import { useState as useState18, useEffect as useEffect14 } from "react";
import { format as format9 } from "date-fns";
import { ptBR as ptBR6 } from "date-fns/locale";

// src/app/components/dashboard/ExpenseLineChart.tsx
import { useState as useState15, useEffect as useEffect11 } from "react";
import { ResponsiveContainer as ResponsiveContainer4, LineChart as LineChart3, Line, XAxis as XAxis3, YAxis as YAxis3, CartesianGrid as CartesianGrid3, Tooltip as Tooltip5, Legend as Legend2 } from "recharts";
import { Loader2 as Loader28 } from "lucide-react";
import { format as format7, subDays, eachDayOfInterval } from "date-fns";
import { ptBR as ptBR4 } from "date-fns/locale";
import { jsxDEV as jsxDEV44 } from "react/jsx-dev-runtime";
var ExpenseLineChart = () => {
  let [data, setData] = useState15([]), [isLoading, setIsLoading] = useState15(!0);
  useEffect11(() => {
    (async () => {
      try {
        setIsLoading(!0);
        let endDate = /* @__PURE__ */ new Date(), startDate = subDays(endDate, 30), { data: transactions, error } = await supabase.from("transactions").select("amount, date").eq("type", "expense").gte("date", format7(startDate, "yyyy-MM-dd")).lte("date", format7(endDate, "yyyy-MM-dd")).order("date");
        if (error) {
          console.error("Error fetching expense data:", error);
          return;
        }
        let initialData = eachDayOfInterval({ start: startDate, end: endDate }).map((date) => ({
          date: format7(date, "yyyy-MM-dd"),
          value: 0
        })), expensesByDate = transactions.reduce((acc, transaction) => {
          let date = transaction.date, amount = parseFloat(String(transaction.amount));
          return acc[date] || (acc[date] = 0), acc[date] += amount, acc;
        }, {}), chartData = initialData.map((item) => ({
          date: item.date,
          value: expensesByDate[item.date] || 0
        }));
        setData(chartData);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsLoading(!1);
      }
    })();
  }, []);
  let formatDate = (dateString) => {
    let date = new Date(dateString);
    return format7(date, "dd/MM", { locale: ptBR4 });
  }, formatCurrency = (value) => `R$ ${value.toFixed(2)}`;
  return isLoading ? /* @__PURE__ */ jsxDEV44("div", { className: "flex justify-center items-center py-8", children: /* @__PURE__ */ jsxDEV44(Loader28, { className: "h-8 w-8 animate-spin text-primary" }, void 0, !1, {
    fileName: "src/app/components/dashboard/ExpenseLineChart.tsx",
    lineNumber: 92,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "src/app/components/dashboard/ExpenseLineChart.tsx",
    lineNumber: 91,
    columnNumber: 7
  }, this) : /* @__PURE__ */ jsxDEV44(ResponsiveContainer4, { width: "100%", height: 300, children: /* @__PURE__ */ jsxDEV44(
    LineChart3,
    {
      data,
      margin: { top: 5, right: 30, left: 20, bottom: 5 },
      children: [
        /* @__PURE__ */ jsxDEV44(CartesianGrid3, { strokeDasharray: "3 3", stroke: "#1F2933" }, void 0, !1, {
          fileName: "src/app/components/dashboard/ExpenseLineChart.tsx",
          lineNumber: 103,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV44(
          XAxis3,
          {
            dataKey: "date",
            tickFormatter: formatDate,
            tick: { fill: "#A1B1C2" },
            stroke: "#1F2933"
          },
          void 0,
          !1,
          {
            fileName: "src/app/components/dashboard/ExpenseLineChart.tsx",
            lineNumber: 104,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ jsxDEV44(
          YAxis3,
          {
            tickFormatter: formatCurrency,
            tick: { fill: "#A1B1C2" },
            stroke: "#1F2933"
          },
          void 0,
          !1,
          {
            fileName: "src/app/components/dashboard/ExpenseLineChart.tsx",
            lineNumber: 110,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ jsxDEV44(
          Tooltip5,
          {
            formatter: (value) => [formatCurrency(value), "Despesas"],
            labelFormatter: formatDate,
            contentStyle: { backgroundColor: "#161B22", borderColor: "#1F2933" }
          },
          void 0,
          !1,
          {
            fileName: "src/app/components/dashboard/ExpenseLineChart.tsx",
            lineNumber: 115,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ jsxDEV44(Legend2, {}, void 0, !1, {
          fileName: "src/app/components/dashboard/ExpenseLineChart.tsx",
          lineNumber: 120,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV44(
          Line,
          {
            type: "monotone",
            dataKey: "value",
            name: "Despesas",
            stroke: "#EF4444",
            strokeWidth: 2,
            dot: { strokeWidth: 2, r: 4 },
            activeDot: { r: 6, strokeWidth: 0 }
          },
          void 0,
          !1,
          {
            fileName: "src/app/components/dashboard/ExpenseLineChart.tsx",
            lineNumber: 121,
            columnNumber: 9
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "src/app/components/dashboard/ExpenseLineChart.tsx",
      lineNumber: 99,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "src/app/components/dashboard/ExpenseLineChart.tsx",
    lineNumber: 98,
    columnNumber: 5
  }, this);
};

// src/app/components/dashboard/TransactionList.tsx
import { useEffect as useEffect12, useState as useState16 } from "react";
import {
  ShoppingBag,
  Coffee,
  Home as Home3,
  Car,
  Wallet as Wallet4,
  Loader2 as Loader29
} from "lucide-react";
import { jsxDEV as jsxDEV45 } from "react/jsx-dev-runtime";
var categoryIconMap = {
  Moradia: Home3,
  Alimenta\u00E7\u00E3o: ShoppingBag,
  Transporte: Car,
  Lazer: Coffee,
  Sa\u00FAde: Home3,
  Educa\u00E7\u00E3o: Home3,
  Servi\u00E7os: Home3,
  Outros: Home3,
  Sal\u00E1rio: Wallet4,
  Freelance: Wallet4,
  Investimentos: Wallet4,
  Presentes: Wallet4,
  Renda: Wallet4,
  "Renda Extra": Wallet4
}, TransactionList = ({ type }) => {
  let [transactions, setTransactions] = useState16([]), [isLoading, setIsLoading] = useState16(!0);
  return useEffect12(() => {
    (async () => {
      try {
        setIsLoading(!0);
        let query = supabase.from("transactions").select("*, wallet:wallets(id, name)").order("date", { ascending: !1 });
        type === "expenses" ? query = query.eq("type", "expense") : type === "income" && (query = query.eq("type", "income"));
        let { data, error } = await query;
        error ? console.error("Error fetching transactions:", error) : (console.log("Transactions:", data), setTransactions(data || []));
      } catch (error) {
        console.error("Error fetching transactions:", error);
      } finally {
        setIsLoading(!1);
      }
    })();
  }, [type]), isLoading ? /* @__PURE__ */ jsxDEV45("div", { className: "flex justify-center items-center py-8", children: /* @__PURE__ */ jsxDEV45(Loader29, { className: "h-8 w-8 animate-spin text-muted-foreground" }, void 0, !1, {
    fileName: "src/app/components/dashboard/TransactionList.tsx",
    lineNumber: 94,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "src/app/components/dashboard/TransactionList.tsx",
    lineNumber: 93,
    columnNumber: 7
  }, this) : transactions.length === 0 ? /* @__PURE__ */ jsxDEV45("div", { className: "text-center py-8", children: /* @__PURE__ */ jsxDEV45("p", { className: "text-muted-foreground", children: type === "expenses" ? "Nenhuma despesa registrada" : type === "income" ? "Nenhuma receita registrada" : "Nenhuma transa\xE7\xE3o registrada" }, void 0, !1, {
    fileName: "src/app/components/dashboard/TransactionList.tsx",
    lineNumber: 102,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "src/app/components/dashboard/TransactionList.tsx",
    lineNumber: 101,
    columnNumber: 7
  }, this) : /* @__PURE__ */ jsxDEV45(ScrollArea, { className: "h-[300px]", children: /* @__PURE__ */ jsxDEV45("div", { className: "space-y-4", children: transactions.map((transaction) => {
    let IconComponent = categoryIconMap[transaction.category] || (transaction.type === "expense" ? ShoppingBag : Wallet4);
    return /* @__PURE__ */ jsxDEV45(
      "div",
      {
        className: "flex items-center justify-between p-4 rounded-lg border border-border transition-colors",
        children: [
          /* @__PURE__ */ jsxDEV45("div", { className: "flex items-center space-x-4", children: [
            /* @__PURE__ */ jsxDEV45(
              "div",
              {
                className: cn(
                  "w-10 h-10 rounded-full flex items-center justify-center",
                  transaction.type === "expense" ? "bg-expense/10" : "bg-income/10"
                ),
                children: /* @__PURE__ */ jsxDEV45(
                  IconComponent,
                  {
                    className: cn(
                      "h-5 w-5",
                      transaction.type === "expense" ? "text-expense" : "text-income"
                    )
                  },
                  void 0,
                  !1,
                  {
                    fileName: "src/app/components/dashboard/TransactionList.tsx",
                    lineNumber: 132,
                    columnNumber: 19
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "src/app/components/dashboard/TransactionList.tsx",
                lineNumber: 126,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ jsxDEV45("div", { children: [
              /* @__PURE__ */ jsxDEV45("p", { className: "font-medium", children: transaction.name }, void 0, !1, {
                fileName: "src/app/components/dashboard/TransactionList.tsx",
                lineNumber: 140,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV45("p", { className: "text-sm text-muted-foreground", children: [
                transaction.category,
                " \u2022 ",
                transaction.wallet?.name || "Carteira removida"
              ] }, void 0, !0, {
                fileName: "src/app/components/dashboard/TransactionList.tsx",
                lineNumber: 141,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "src/app/components/dashboard/TransactionList.tsx",
              lineNumber: 139,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "src/app/components/dashboard/TransactionList.tsx",
            lineNumber: 125,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV45("div", { className: "text-right", children: [
            /* @__PURE__ */ jsxDEV45(
              "p",
              {
                className: cn(
                  "font-bold",
                  transaction.type === "expense" ? "text-expense" : "text-income"
                ),
                children: [
                  transaction.type === "expense" ? "-" : "+",
                  "R$ ",
                  transaction.amount.toFixed(2)
                ]
              },
              void 0,
              !0,
              {
                fileName: "src/app/components/dashboard/TransactionList.tsx",
                lineNumber: 147,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ jsxDEV45("p", { className: "text-xs text-muted-foreground", children: new Date(transaction.date).toLocaleDateString("pt-BR") }, void 0, !1, {
              fileName: "src/app/components/dashboard/TransactionList.tsx",
              lineNumber: 155,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "src/app/components/dashboard/TransactionList.tsx",
            lineNumber: 146,
            columnNumber: 15
          }, this)
        ]
      },
      transaction.id,
      !0,
      {
        fileName: "src/app/components/dashboard/TransactionList.tsx",
        lineNumber: 121,
        columnNumber: 13
      },
      this
    );
  }) }, void 0, !1, {
    fileName: "src/app/components/dashboard/TransactionList.tsx",
    lineNumber: 115,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "src/app/components/dashboard/TransactionList.tsx",
    lineNumber: 114,
    columnNumber: 5
  }, this);
};

// src/app/components/dashboard/DashboardPage.tsx
import { CalendarIcon as CalendarIcon4, Plus, Loader2 as Loader211 } from "lucide-react";

// src/app/components/dashboard/AddTransactionDialog.tsx
import { useState as useState17, useEffect as useEffect13 } from "react";
import { format as format8 } from "date-fns";
import { ptBR as ptBR5 } from "date-fns/locale";
import { CalendarIcon as CalendarIcon3, Loader2 as Loader210 } from "lucide-react";

// src/app/components/ui/switch.tsx
import * as React34 from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { jsxDEV as jsxDEV46 } from "react/jsx-dev-runtime";
var Switch = React34.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV46(
  SwitchPrimitives.Root,
  {
    className: cn(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    ),
    ...props,
    ref,
    children: /* @__PURE__ */ jsxDEV46(
      SwitchPrimitives.Thumb,
      {
        className: cn(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      },
      void 0,
      !1,
      {
        fileName: "src/app/components/ui/switch.tsx",
        lineNumber: 18,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "src/app/components/ui/switch.tsx",
    lineNumber: 10,
    columnNumber: 3
  },
  this
));
Switch.displayName = SwitchPrimitives.Root.displayName;

// src/app/components/dashboard/AddTransactionDialog.tsx
import { Fragment, jsxDEV as jsxDEV47 } from "react/jsx-dev-runtime";
var expenseCategories = [
  "Moradia",
  "Alimenta\xE7\xE3o",
  "Transporte",
  "Lazer",
  "Sa\xFAde",
  "Educa\xE7\xE3o",
  "Servi\xE7os",
  "Outros"
], incomeCategories = [
  "Sal\xE1rio",
  "Freelance",
  "Investimentos",
  "Presentes",
  "Outros"
], AddTransactionDialog = ({
  open,
  onOpenChange,
  type
}) => {
  let [date, setDate] = useState17(/* @__PURE__ */ new Date()), [isRecurrent, setIsRecurrent] = useState17(!1), [isSubmitting, setIsSubmitting] = useState17(!1), [wallets, setWallets] = useState17([]), [isLoadingWallets, setIsLoadingWallets] = useState17(!0), [name, setName] = useState17(""), [amount, setAmount] = useState17(""), [category, setCategory] = useState17(""), [walletId, setWalletId] = useState17("");
  return useEffect13(() => {
    open && ((async () => {
      try {
        setIsLoadingWallets(!0);
        let { data, error } = await supabase.from("wallets").select("id, name").order("name", { ascending: !0 });
        error ? (console.error("Error fetching wallets:", error), toast({
          title: "Erro ao carregar carteiras",
          description: error.message,
          variant: "destructive"
        })) : setWallets(data || []);
      } catch (error) {
        console.error("Error fetching wallets:", error);
      } finally {
        setIsLoadingWallets(!1);
      }
    })(), setName(""), setAmount(""), setCategory(""), setWalletId(""), setDate(/* @__PURE__ */ new Date()), setIsRecurrent(!1));
  }, [open]), /* @__PURE__ */ jsxDEV47(Dialog, { open, onOpenChange, children: /* @__PURE__ */ jsxDEV47(DialogContent, { className: "sm:max-w-[425px]", children: [
    /* @__PURE__ */ jsxDEV47(DialogHeader, { children: [
      /* @__PURE__ */ jsxDEV47(DialogTitle, { children: type === "despesa" ? "Adicionar Despesa" : "Adicionar Receita" }, void 0, !1, {
        fileName: "src/app/components/dashboard/AddTransactionDialog.tsx",
        lineNumber: 187,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV47(DialogDescription, { children: [
        "Preencha os detalhes da ",
        type === "despesa" ? "despesa" : "receita",
        " abaixo."
      ] }, void 0, !0, {
        fileName: "src/app/components/dashboard/AddTransactionDialog.tsx",
        lineNumber: 190,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "src/app/components/dashboard/AddTransactionDialog.tsx",
      lineNumber: 186,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV47("form", { onSubmit: async (e) => {
      if (e.preventDefault(), !name || !amount || !category || !walletId) {
        toast({
          title: "Dados incompletos",
          description: "Por favor, preencha todos os campos obrigat\xF3rios.",
          variant: "destructive"
        });
        return;
      }
      setIsSubmitting(!0);
      try {
        let { data: { user } } = await supabase.auth.getUser();
        if (!user)
          throw new Error("User not authenticated");
        let { data, error } = await supabase.from("transactions").insert({
          name,
          amount: parseFloat(amount),
          category,
          date: format8(date, "yyyy-MM-dd"),
          type: type === "despesa" ? "expense" : "income",
          recurrent: isRecurrent,
          wallet_id: walletId,
          user_id: user.id
        }).select();
        error ? (console.error("Error adding transaction:", error), toast({
          title: "Erro ao adicionar transa\xE7\xE3o",
          description: error.message,
          variant: "destructive"
        })) : (toast({
          title: `${type === "despesa" ? "Despesa" : "Receita"} adicionada`,
          description: "A transa\xE7\xE3o foi registrada com sucesso."
        }), onOpenChange(!1));
      } catch (error) {
        console.error("Error adding transaction:", error), toast({
          title: "Erro ao adicionar transa\xE7\xE3o",
          description: "Ocorreu um erro ao registrar a transa\xE7\xE3o.",
          variant: "destructive"
        });
      } finally {
        setIsSubmitting(!1);
      }
    }, children: [
      /* @__PURE__ */ jsxDEV47("div", { className: "grid gap-4 py-4", children: [
        /* @__PURE__ */ jsxDEV47("div", { className: "grid grid-cols-4 items-center gap-4", children: [
          /* @__PURE__ */ jsxDEV47(Label2, { htmlFor: "name", className: "text-right", children: "Nome" }, void 0, !1, {
            fileName: "src/app/components/dashboard/AddTransactionDialog.tsx",
            lineNumber: 197,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV47(
            Input,
            {
              id: "name",
              placeholder: type === "despesa" ? "Aluguel, Mercado..." : "Sal\xE1rio, Freelance...",
              className: "col-span-3",
              value: name,
              onChange: (e) => setName(e.target.value),
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "src/app/components/dashboard/AddTransactionDialog.tsx",
              lineNumber: 200,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "src/app/components/dashboard/AddTransactionDialog.tsx",
          lineNumber: 196,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV47("div", { className: "grid grid-cols-4 items-center gap-4", children: [
          /* @__PURE__ */ jsxDEV47(Label2, { htmlFor: "value", className: "text-right", children: "Valor (R$)" }, void 0, !1, {
            fileName: "src/app/components/dashboard/AddTransactionDialog.tsx",
            lineNumber: 210,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV47(
            Input,
            {
              id: "value",
              type: "number",
              placeholder: "0,00",
              step: "0.01",
              min: "0",
              className: "col-span-3",
              value: amount,
              onChange: (e) => setAmount(e.target.value),
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "src/app/components/dashboard/AddTransactionDialog.tsx",
              lineNumber: 213,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "src/app/components/dashboard/AddTransactionDialog.tsx",
          lineNumber: 209,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV47("div", { className: "grid grid-cols-4 items-center gap-4", children: [
          /* @__PURE__ */ jsxDEV47(Label2, { htmlFor: "category", className: "text-right", children: "Categoria" }, void 0, !1, {
            fileName: "src/app/components/dashboard/AddTransactionDialog.tsx",
            lineNumber: 226,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV47(
            Select,
            {
              value: category,
              onValueChange: setCategory,
              required: !0,
              children: [
                /* @__PURE__ */ jsxDEV47(SelectTrigger, { className: "col-span-3", id: "category", children: /* @__PURE__ */ jsxDEV47(SelectValue, { placeholder: "Selecione uma categoria" }, void 0, !1, {
                  fileName: "src/app/components/dashboard/AddTransactionDialog.tsx",
                  lineNumber: 235,
                  columnNumber: 19
                }, this) }, void 0, !1, {
                  fileName: "src/app/components/dashboard/AddTransactionDialog.tsx",
                  lineNumber: 234,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV47(SelectContent, { children: (type === "despesa" ? expenseCategories : incomeCategories).map(
                  (cat) => /* @__PURE__ */ jsxDEV47(SelectItem, { value: cat, children: cat }, cat, !1, {
                    fileName: "src/app/components/dashboard/AddTransactionDialog.tsx",
                    lineNumber: 240,
                    columnNumber: 23
                  }, this)
                ) }, void 0, !1, {
                  fileName: "src/app/components/dashboard/AddTransactionDialog.tsx",
                  lineNumber: 237,
                  columnNumber: 17
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "src/app/components/dashboard/AddTransactionDialog.tsx",
              lineNumber: 229,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "src/app/components/dashboard/AddTransactionDialog.tsx",
          lineNumber: 225,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV47("div", { className: "grid grid-cols-4 items-center gap-4", children: [
          /* @__PURE__ */ jsxDEV47(Label2, { htmlFor: "wallet", className: "text-right", children: "Carteira" }, void 0, !1, {
            fileName: "src/app/components/dashboard/AddTransactionDialog.tsx",
            lineNumber: 249,
            columnNumber: 15
          }, this),
          isLoadingWallets ? /* @__PURE__ */ jsxDEV47("div", { className: "col-span-3 flex items-center space-x-2", children: [
            /* @__PURE__ */ jsxDEV47(Loader210, { className: "h-4 w-4 animate-spin" }, void 0, !1, {
              fileName: "src/app/components/dashboard/AddTransactionDialog.tsx",
              lineNumber: 254,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV47("span", { children: "Carregando carteiras..." }, void 0, !1, {
              fileName: "src/app/components/dashboard/AddTransactionDialog.tsx",
              lineNumber: 255,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "src/app/components/dashboard/AddTransactionDialog.tsx",
            lineNumber: 253,
            columnNumber: 17
          }, this) : /* @__PURE__ */ jsxDEV47(
            Select,
            {
              value: walletId,
              onValueChange: setWalletId,
              required: !0,
              children: [
                /* @__PURE__ */ jsxDEV47(SelectTrigger, { className: "col-span-3", id: "wallet", children: /* @__PURE__ */ jsxDEV47(SelectValue, { placeholder: "Selecione uma carteira" }, void 0, !1, {
                  fileName: "src/app/components/dashboard/AddTransactionDialog.tsx",
                  lineNumber: 264,
                  columnNumber: 21
                }, this) }, void 0, !1, {
                  fileName: "src/app/components/dashboard/AddTransactionDialog.tsx",
                  lineNumber: 263,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV47(SelectContent, { children: wallets.map((wallet) => /* @__PURE__ */ jsxDEV47(SelectItem, { value: wallet.id, children: wallet.name }, wallet.id, !1, {
                  fileName: "src/app/components/dashboard/AddTransactionDialog.tsx",
                  lineNumber: 268,
                  columnNumber: 23
                }, this)) }, void 0, !1, {
                  fileName: "src/app/components/dashboard/AddTransactionDialog.tsx",
                  lineNumber: 266,
                  columnNumber: 19
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "src/app/components/dashboard/AddTransactionDialog.tsx",
              lineNumber: 258,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "src/app/components/dashboard/AddTransactionDialog.tsx",
          lineNumber: 248,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV47("div", { className: "grid grid-cols-4 items-center gap-4", children: [
          /* @__PURE__ */ jsxDEV47(Label2, { htmlFor: "date", className: "text-right", children: "Data" }, void 0, !1, {
            fileName: "src/app/components/dashboard/AddTransactionDialog.tsx",
            lineNumber: 277,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV47(Popover, { children: [
            /* @__PURE__ */ jsxDEV47(PopoverTrigger, { asChild: !0, children: /* @__PURE__ */ jsxDEV47(
              Button,
              {
                variant: "outline",
                className: cn(
                  "col-span-3 w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                ),
                children: [
                  /* @__PURE__ */ jsxDEV47(CalendarIcon3, { className: "mr-2 h-4 w-4" }, void 0, !1, {
                    fileName: "src/app/components/dashboard/AddTransactionDialog.tsx",
                    lineNumber: 289,
                    columnNumber: 21
                  }, this),
                  date ? format8(date, "PPP", { locale: ptBR5 }) : /* @__PURE__ */ jsxDEV47("span", { children: "Selecione uma data" }, void 0, !1, {
                    fileName: "src/app/components/dashboard/AddTransactionDialog.tsx",
                    lineNumber: 290,
                    columnNumber: 69
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "src/app/components/dashboard/AddTransactionDialog.tsx",
                lineNumber: 282,
                columnNumber: 19
              },
              this
            ) }, void 0, !1, {
              fileName: "src/app/components/dashboard/AddTransactionDialog.tsx",
              lineNumber: 281,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV47(PopoverContent, { className: "w-auto p-0", align: "start", children: /* @__PURE__ */ jsxDEV47(
              Calendar,
              {
                mode: "single",
                selected: date,
                onSelect: (date2) => date2 && setDate(date2),
                initialFocus: !0,
                className: cn("p-3 pointer-events-auto")
              },
              void 0,
              !1,
              {
                fileName: "src/app/components/dashboard/AddTransactionDialog.tsx",
                lineNumber: 294,
                columnNumber: 19
              },
              this
            ) }, void 0, !1, {
              fileName: "src/app/components/dashboard/AddTransactionDialog.tsx",
              lineNumber: 293,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "src/app/components/dashboard/AddTransactionDialog.tsx",
            lineNumber: 280,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "src/app/components/dashboard/AddTransactionDialog.tsx",
          lineNumber: 276,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV47("div", { className: "grid grid-cols-4 items-center gap-4", children: [
          /* @__PURE__ */ jsxDEV47(Label2, { htmlFor: "recurrent", className: "text-right", children: "Recorrente" }, void 0, !1, {
            fileName: "src/app/components/dashboard/AddTransactionDialog.tsx",
            lineNumber: 305,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV47("div", { className: "flex items-center space-x-2 col-span-3", children: [
            /* @__PURE__ */ jsxDEV47(
              Switch,
              {
                id: "recurrent",
                checked: isRecurrent,
                onCheckedChange: setIsRecurrent
              },
              void 0,
              !1,
              {
                fileName: "src/app/components/dashboard/AddTransactionDialog.tsx",
                lineNumber: 309,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ jsxDEV47(Label2, { htmlFor: "recurrent", className: "font-normal", children: isRecurrent ? "Sim" : "N\xE3o" }, void 0, !1, {
              fileName: "src/app/components/dashboard/AddTransactionDialog.tsx",
              lineNumber: 314,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "src/app/components/dashboard/AddTransactionDialog.tsx",
            lineNumber: 308,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "src/app/components/dashboard/AddTransactionDialog.tsx",
          lineNumber: 304,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "src/app/components/dashboard/AddTransactionDialog.tsx",
        lineNumber: 195,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV47(DialogFooter, { children: /* @__PURE__ */ jsxDEV47(
        Button,
        {
          type: "submit",
          className: cn(
            type === "despesa" ? "bg-vermelho hover:bg-vermelho/90" : "bg-verde hover:bg-verde/90"
          ),
          disabled: isSubmitting,
          children: isSubmitting ? /* @__PURE__ */ jsxDEV47(Fragment, { children: [
            /* @__PURE__ */ jsxDEV47(Loader210, { className: "h-4 w-4 mr-2 animate-spin" }, void 0, !1, {
              fileName: "src/app/components/dashboard/AddTransactionDialog.tsx",
              lineNumber: 330,
              columnNumber: 19
            }, this),
            "Salvando..."
          ] }, void 0, !0, {
            fileName: "src/app/components/dashboard/AddTransactionDialog.tsx",
            lineNumber: 329,
            columnNumber: 17
          }, this) : "Salvar"
        },
        void 0,
        !1,
        {
          fileName: "src/app/components/dashboard/AddTransactionDialog.tsx",
          lineNumber: 321,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "src/app/components/dashboard/AddTransactionDialog.tsx",
        lineNumber: 320,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "src/app/components/dashboard/AddTransactionDialog.tsx",
      lineNumber: 194,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "src/app/components/dashboard/AddTransactionDialog.tsx",
    lineNumber: 185,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "src/app/components/dashboard/AddTransactionDialog.tsx",
    lineNumber: 184,
    columnNumber: 5
  }, this);
};

// src/app/components/dashboard/DashboardPage.tsx
import { Fragment as Fragment2, jsxDEV as jsxDEV48 } from "react/jsx-dev-runtime";
var DashboardPage = () => {
  let [selectedDate, setSelectedDate] = useState18(/* @__PURE__ */ new Date()), [isAddTransactionOpen, setIsAddTransactionOpen] = useState18(!1), [transactionType, setTransactionType] = useState18("despesa"), [monthlyIncome, setMonthlyIncome] = useState18(0), [monthlyExpenses, setMonthlyExpenses] = useState18(0), [monthlyBalance, setMonthlyBalance] = useState18(0), [isLoading, setIsLoading] = useState18(!0), [transactionFilter, setTransactionFilter] = useState18("all"), [userProfile, setUserProfile] = useState18(null), handleAddTransaction = (type) => {
    setTransactionType(type), setIsAddTransactionOpen(!0);
  };
  return useEffect14(() => {
    (async () => {
      try {
        let { data: { user } } = await supabase.auth.getUser();
        if (user) {
          let { data } = await supabase.from("user_profiles").select("full_name").eq("id", user.id).single();
          setUserProfile(data);
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    })();
  }, []), useEffect14(() => {
    (async () => {
      try {
        setIsLoading(!0);
        let currentMonth = format9(selectedDate, "MM"), currentYear = format9(selectedDate, "yyyy"), startDate = `${currentYear}-${currentMonth}-01`, lastDay = new Date(parseInt(currentYear), parseInt(currentMonth), 0).getDate(), endDate = `${currentYear}-${currentMonth}-${lastDay}`, { data: incomeData, error: incomeError } = await supabase.from("transactions").select("amount").eq("type", "income").gte("date", startDate).lte("date", endDate), { data: expenseData, error: expenseError } = await supabase.from("transactions").select("amount").eq("type", "expense").gte("date", startDate).lte("date", endDate);
        if (incomeError)
          console.error("Error fetching income data:", incomeError);
        else {
          let totalIncome = incomeData?.reduce((sum, item) => sum + parseFloat(String(item.amount)), 0) || 0;
          setMonthlyIncome(totalIncome);
        }
        if (expenseError)
          console.error("Error fetching expense data:", expenseError);
        else {
          let totalExpenses = expenseData?.reduce((sum, item) => sum + parseFloat(String(item.amount)), 0) || 0;
          setMonthlyExpenses(totalExpenses);
        }
        let income = incomeData?.reduce((sum, item) => sum + parseFloat(String(item.amount)), 0) || 0, expenses = expenseData?.reduce((sum, item) => sum + parseFloat(String(item.amount)), 0) || 0;
        setMonthlyBalance(income - expenses);
      } catch (error) {
        console.error("Error calculating monthly summary:", error);
      } finally {
        setIsLoading(!1);
      }
    })();
  }, [selectedDate, isAddTransactionOpen]), /* @__PURE__ */ jsxDEV48("div", { className: "space-y-8 pb-16 md:pb-8", children: [
    /* @__PURE__ */ jsxDEV48("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxDEV48("div", { children: [
        /* @__PURE__ */ jsxDEV48("h1", { className: "text-3xl font-bold tracking-tight", children: [
          "Ol\xE1, ",
          userProfile?.full_name || "Usu\xE1rio"
        ] }, void 0, !0, {
          fileName: "src/app/components/dashboard/DashboardPage.tsx",
          lineNumber: 112,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV48("p", { className: "text-muted-foreground", children: "Acompanhe suas finan\xE7as e fique no controle." }, void 0, !1, {
          fileName: "src/app/components/dashboard/DashboardPage.tsx",
          lineNumber: 113,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "src/app/components/dashboard/DashboardPage.tsx",
        lineNumber: 111,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV48("div", { children: /* @__PURE__ */ jsxDEV48(Popover, { children: [
        /* @__PURE__ */ jsxDEV48(PopoverTrigger, { asChild: !0, children: /* @__PURE__ */ jsxDEV48(Button, { variant: "outline", className: "w-[14rem] justify-start text-left font-normal", children: [
          /* @__PURE__ */ jsxDEV48(CalendarIcon4, { className: "mr-2 h-4 w-4" }, void 0, !1, {
            fileName: "src/app/components/dashboard/DashboardPage.tsx",
            lineNumber: 121,
            columnNumber: 17
          }, this),
          format9(selectedDate, "MMMM yyyy", { locale: ptBR6 })
        ] }, void 0, !0, {
          fileName: "src/app/components/dashboard/DashboardPage.tsx",
          lineNumber: 120,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "src/app/components/dashboard/DashboardPage.tsx",
          lineNumber: 119,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV48(PopoverContent, { className: "w-auto p-0", align: "end", children: /* @__PURE__ */ jsxDEV48(
          Calendar,
          {
            mode: "single",
            selected: selectedDate,
            onSelect: (date) => date && setSelectedDate(date),
            initialFocus: !0,
            className: cn("p-3 pointer-events-auto")
          },
          void 0,
          !1,
          {
            fileName: "src/app/components/dashboard/DashboardPage.tsx",
            lineNumber: 126,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "src/app/components/dashboard/DashboardPage.tsx",
          lineNumber: 125,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "src/app/components/dashboard/DashboardPage.tsx",
        lineNumber: 118,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "src/app/components/dashboard/DashboardPage.tsx",
        lineNumber: 117,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "src/app/components/dashboard/DashboardPage.tsx",
      lineNumber: 110,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV48("div", { className: "grid gap-4 md:grid-cols-3", children: [
      /* @__PURE__ */ jsxDEV48(Card, { children: [
        /* @__PURE__ */ jsxDEV48(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: /* @__PURE__ */ jsxDEV48(CardTitle, { className: "text-sm font-medium", children: "Balan\xE7o Mensal" }, void 0, !1, {
          fileName: "src/app/components/dashboard/DashboardPage.tsx",
          lineNumber: 141,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "src/app/components/dashboard/DashboardPage.tsx",
          lineNumber: 140,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV48(CardContent, { children: isLoading ? /* @__PURE__ */ jsxDEV48("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsxDEV48(Loader211, { className: "h-4 w-4 animate-spin" }, void 0, !1, {
            fileName: "src/app/components/dashboard/DashboardPage.tsx",
            lineNumber: 146,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV48("span", { children: "Carregando..." }, void 0, !1, {
            fileName: "src/app/components/dashboard/DashboardPage.tsx",
            lineNumber: 147,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "src/app/components/dashboard/DashboardPage.tsx",
          lineNumber: 145,
          columnNumber: 15
        }, this) : /* @__PURE__ */ jsxDEV48(Fragment2, { children: [
          /* @__PURE__ */ jsxDEV48("div", { className: cn(
            "text-2xl font-bold",
            monthlyBalance >= 0 ? "text-success" : "text-expense"
          ), children: [
            "R$ ",
            monthlyBalance.toFixed(2)
          ] }, void 0, !0, {
            fileName: "src/app/components/dashboard/DashboardPage.tsx",
            lineNumber: 151,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV48("p", { className: "text-xs text-muted-foreground mt-1", children: monthlyBalance >= 0 ? "Voc\xEA est\xE1 com saldo positivo" : "Voc\xEA est\xE1 com saldo negativo" }, void 0, !1, {
            fileName: "src/app/components/dashboard/DashboardPage.tsx",
            lineNumber: 157,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "src/app/components/dashboard/DashboardPage.tsx",
          lineNumber: 150,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "src/app/components/dashboard/DashboardPage.tsx",
          lineNumber: 143,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "src/app/components/dashboard/DashboardPage.tsx",
        lineNumber: 139,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV48(Card, { children: [
        /* @__PURE__ */ jsxDEV48(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: /* @__PURE__ */ jsxDEV48(CardTitle, { className: "text-sm font-medium", children: "Total de Despesas" }, void 0, !1, {
          fileName: "src/app/components/dashboard/DashboardPage.tsx",
          lineNumber: 168,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "src/app/components/dashboard/DashboardPage.tsx",
          lineNumber: 167,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV48(CardContent, { children: isLoading ? /* @__PURE__ */ jsxDEV48("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsxDEV48(Loader211, { className: "h-4 w-4 animate-spin" }, void 0, !1, {
            fileName: "src/app/components/dashboard/DashboardPage.tsx",
            lineNumber: 173,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV48("span", { children: "Carregando..." }, void 0, !1, {
            fileName: "src/app/components/dashboard/DashboardPage.tsx",
            lineNumber: 174,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "src/app/components/dashboard/DashboardPage.tsx",
          lineNumber: 172,
          columnNumber: 15
        }, this) : /* @__PURE__ */ jsxDEV48(Fragment2, { children: [
          /* @__PURE__ */ jsxDEV48("div", { className: "text-2xl font-bold text-expense", children: [
            "R$ ",
            monthlyExpenses.toFixed(2)
          ] }, void 0, !0, {
            fileName: "src/app/components/dashboard/DashboardPage.tsx",
            lineNumber: 178,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV48("p", { className: "text-xs text-muted-foreground mt-1", children: selectedDate.getMonth() === (/* @__PURE__ */ new Date()).getMonth() && selectedDate.getFullYear() === (/* @__PURE__ */ new Date()).getFullYear() ? "M\xEAs atual" : format9(selectedDate, "MMMM yyyy", { locale: ptBR6 }) }, void 0, !1, {
            fileName: "src/app/components/dashboard/DashboardPage.tsx",
            lineNumber: 179,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "src/app/components/dashboard/DashboardPage.tsx",
          lineNumber: 177,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "src/app/components/dashboard/DashboardPage.tsx",
          lineNumber: 170,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "src/app/components/dashboard/DashboardPage.tsx",
        lineNumber: 166,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV48(Card, { children: [
        /* @__PURE__ */ jsxDEV48(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: /* @__PURE__ */ jsxDEV48(CardTitle, { className: "text-sm font-medium", children: "Total de Receitas" }, void 0, !1, {
          fileName: "src/app/components/dashboard/DashboardPage.tsx",
          lineNumber: 190,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "src/app/components/dashboard/DashboardPage.tsx",
          lineNumber: 189,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV48(CardContent, { children: isLoading ? /* @__PURE__ */ jsxDEV48("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsxDEV48(Loader211, { className: "h-4 w-4 animate-spin" }, void 0, !1, {
            fileName: "src/app/components/dashboard/DashboardPage.tsx",
            lineNumber: 195,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV48("span", { children: "Carregando..." }, void 0, !1, {
            fileName: "src/app/components/dashboard/DashboardPage.tsx",
            lineNumber: 196,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "src/app/components/dashboard/DashboardPage.tsx",
          lineNumber: 194,
          columnNumber: 15
        }, this) : /* @__PURE__ */ jsxDEV48(Fragment2, { children: [
          /* @__PURE__ */ jsxDEV48("div", { className: "text-2xl font-bold text-income", children: [
            "R$ ",
            monthlyIncome.toFixed(2)
          ] }, void 0, !0, {
            fileName: "src/app/components/dashboard/DashboardPage.tsx",
            lineNumber: 200,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV48("p", { className: "text-xs text-muted-foreground mt-1", children: selectedDate.getMonth() === (/* @__PURE__ */ new Date()).getMonth() && selectedDate.getFullYear() === (/* @__PURE__ */ new Date()).getFullYear() ? "M\xEAs atual" : format9(selectedDate, "MMMM yyyy", { locale: ptBR6 }) }, void 0, !1, {
            fileName: "src/app/components/dashboard/DashboardPage.tsx",
            lineNumber: 201,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "src/app/components/dashboard/DashboardPage.tsx",
          lineNumber: 199,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "src/app/components/dashboard/DashboardPage.tsx",
          lineNumber: 192,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "src/app/components/dashboard/DashboardPage.tsx",
        lineNumber: 188,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "src/app/components/dashboard/DashboardPage.tsx",
      lineNumber: 138,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV48("div", { className: "grid gap-4 md:grid-cols-7", children: /* @__PURE__ */ jsxDEV48(Card, { className: "col-span-7", children: [
      /* @__PURE__ */ jsxDEV48(CardHeader, { children: /* @__PURE__ */ jsxDEV48(CardTitle, { children: "Gastos Recentes" }, void 0, !1, {
        fileName: "src/app/components/dashboard/DashboardPage.tsx",
        lineNumber: 215,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "src/app/components/dashboard/DashboardPage.tsx",
        lineNumber: 214,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV48(CardContent, { className: "pl-2", children: /* @__PURE__ */ jsxDEV48(ExpenseLineChart, {}, void 0, !1, {
        fileName: "src/app/components/dashboard/DashboardPage.tsx",
        lineNumber: 218,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "src/app/components/dashboard/DashboardPage.tsx",
        lineNumber: 217,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "src/app/components/dashboard/DashboardPage.tsx",
      lineNumber: 213,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "src/app/components/dashboard/DashboardPage.tsx",
      lineNumber: 212,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV48(Card, { children: [
      /* @__PURE__ */ jsxDEV48(CardHeader, { className: "flex flex-row items-center justify-between", children: [
        /* @__PURE__ */ jsxDEV48(CardTitle, { children: "Transa\xE7\xF5es Recentes" }, void 0, !1, {
          fileName: "src/app/components/dashboard/DashboardPage.tsx",
          lineNumber: 225,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV48("div", { className: "flex space-x-2", children: [
          /* @__PURE__ */ jsxDEV48(
            Select,
            {
              value: transactionFilter,
              onValueChange: (value) => setTransactionFilter(value),
              children: [
                /* @__PURE__ */ jsxDEV48(SelectTrigger, { className: "w-[180px]", children: /* @__PURE__ */ jsxDEV48(SelectValue, { placeholder: "Filtrar transa\xE7\xF5es" }, void 0, !1, {
                  fileName: "src/app/components/dashboard/DashboardPage.tsx",
                  lineNumber: 232,
                  columnNumber: 17
                }, this) }, void 0, !1, {
                  fileName: "src/app/components/dashboard/DashboardPage.tsx",
                  lineNumber: 231,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV48(SelectContent, { children: [
                  /* @__PURE__ */ jsxDEV48(SelectItem, { value: "all", children: "Todas as transa\xE7\xF5es" }, void 0, !1, {
                    fileName: "src/app/components/dashboard/DashboardPage.tsx",
                    lineNumber: 235,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV48(SelectItem, { value: "expenses", children: "Apenas despesas" }, void 0, !1, {
                    fileName: "src/app/components/dashboard/DashboardPage.tsx",
                    lineNumber: 236,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV48(SelectItem, { value: "income", children: "Apenas receitas" }, void 0, !1, {
                    fileName: "src/app/components/dashboard/DashboardPage.tsx",
                    lineNumber: 237,
                    columnNumber: 17
                  }, this)
                ] }, void 0, !0, {
                  fileName: "src/app/components/dashboard/DashboardPage.tsx",
                  lineNumber: 234,
                  columnNumber: 15
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "src/app/components/dashboard/DashboardPage.tsx",
              lineNumber: 227,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ jsxDEV48(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: () => handleAddTransaction("despesa"),
              className: "text-expense border-expense/20 hover:bg-expense/10",
              children: [
                /* @__PURE__ */ jsxDEV48(Plus, { className: "h-4 w-4 mr-1" }, void 0, !1, {
                  fileName: "src/app/components/dashboard/DashboardPage.tsx",
                  lineNumber: 246,
                  columnNumber: 15
                }, this),
                "Despesa"
              ]
            },
            void 0,
            !0,
            {
              fileName: "src/app/components/dashboard/DashboardPage.tsx",
              lineNumber: 240,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ jsxDEV48(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: () => handleAddTransaction("receita"),
              className: "text-income border-income/20 hover:bg-income/10",
              children: [
                /* @__PURE__ */ jsxDEV48(Plus, { className: "h-4 w-4 mr-1" }, void 0, !1, {
                  fileName: "src/app/components/dashboard/DashboardPage.tsx",
                  lineNumber: 255,
                  columnNumber: 15
                }, this),
                "Receita"
              ]
            },
            void 0,
            !0,
            {
              fileName: "src/app/components/dashboard/DashboardPage.tsx",
              lineNumber: 249,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "src/app/components/dashboard/DashboardPage.tsx",
          lineNumber: 226,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "src/app/components/dashboard/DashboardPage.tsx",
        lineNumber: 224,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV48(CardContent, { children: /* @__PURE__ */ jsxDEV48(TransactionList, { type: transactionFilter }, void 0, !1, {
        fileName: "src/app/components/dashboard/DashboardPage.tsx",
        lineNumber: 261,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "src/app/components/dashboard/DashboardPage.tsx",
        lineNumber: 260,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "src/app/components/dashboard/DashboardPage.tsx",
      lineNumber: 223,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV48(
      AddTransactionDialog,
      {
        open: isAddTransactionOpen,
        onOpenChange: setIsAddTransactionOpen,
        type: transactionType
      },
      void 0,
      !1,
      {
        fileName: "src/app/components/dashboard/DashboardPage.tsx",
        lineNumber: 265,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "src/app/components/dashboard/DashboardPage.tsx",
    lineNumber: 109,
    columnNumber: 5
  }, this);
};

// src/app/routes/dashboard.tsx
import { jsxDEV as jsxDEV49 } from "react/jsx-dev-runtime";
function DashboardRoute() {
  return /* @__PURE__ */ jsxDEV49(AppLayout, { children: /* @__PURE__ */ jsxDEV49(DashboardPage, {}, void 0, !1, {
    fileName: "src/app/routes/dashboard.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "src/app/routes/dashboard.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// src/app/routes/despesas.tsx
var despesas_exports = {};
__export(despesas_exports, {
  default: () => ExpensesRoute
});

// src/app/components/expenses/ExpensesPage.tsx
import { useState as useState19, useEffect as useEffect15 } from "react";
import { format as format10 } from "date-fns";
import { ptBR as ptBR7 } from "date-fns/locale";
import { CalendarIcon as CalendarIcon5, Plus as Plus2, ArrowDownCircle, Loader2 as Loader212 } from "lucide-react";
import { Fragment as Fragment3, jsxDEV as jsxDEV50 } from "react/jsx-dev-runtime";
var ExpensesPage = () => {
  let [selectedDate, setSelectedDate] = useState19(/* @__PURE__ */ new Date()), [isAddExpenseOpen, setIsAddExpenseOpen] = useState19(!1), [totalExpenses, setTotalExpenses] = useState19(0), [dailyAverage, setDailyAverage] = useState19(0), [recurrentExpenses, setRecurrentExpenses] = useState19(0), [isLoading, setIsLoading] = useState19(!0);
  return useEffect15(() => {
    (async () => {
      try {
        setIsLoading(!0);
        let currentMonth = format10(selectedDate, "MM"), currentYear = format10(selectedDate, "yyyy"), startDate = `${currentYear}-${currentMonth}-01`, lastDay = new Date(parseInt(currentYear), parseInt(currentMonth), 0).getDate(), endDate = `${currentYear}-${currentMonth}-${lastDay}`, { data: expenseData, error: expenseError } = await supabase.from("transactions").select("amount, recurrent").eq("type", "expense").gte("date", startDate).lte("date", endDate);
        if (expenseError) {
          console.error("Error fetching expense data:", expenseError);
          return;
        }
        let totalAmount = expenseData?.reduce((sum, item) => sum + parseFloat(String(item.amount)), 0) || 0;
        setTotalExpenses(totalAmount), setDailyAverage(totalAmount / lastDay);
        let recurrentAmount = expenseData?.filter((item) => item.recurrent).reduce((sum, item) => sum + parseFloat(String(item.amount)), 0) || 0;
        setRecurrentExpenses(recurrentAmount);
      } catch (error) {
        console.error("Error calculating expense summary:", error);
      } finally {
        setIsLoading(!1);
      }
    })();
  }, [selectedDate, isAddExpenseOpen]), /* @__PURE__ */ jsxDEV50("div", { className: "space-y-8 pb-16 md:pb-8", children: [
    /* @__PURE__ */ jsxDEV50("div", { className: "flex flex-col md:flex-row md:items-center md:justify-between gap-4", children: [
      /* @__PURE__ */ jsxDEV50("div", { children: [
        /* @__PURE__ */ jsxDEV50("h1", { className: "text-3xl font-bold tracking-tight", children: "Despesas" }, void 0, !1, {
          fileName: "src/app/components/expenses/ExpensesPage.tsx",
          lineNumber: 78,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV50("p", { className: "text-muted-foreground", children: "Gerencie e acompanhe todas as suas despesas." }, void 0, !1, {
          fileName: "src/app/components/expenses/ExpensesPage.tsx",
          lineNumber: 79,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "src/app/components/expenses/ExpensesPage.tsx",
        lineNumber: 77,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV50("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsxDEV50(Popover, { children: [
          /* @__PURE__ */ jsxDEV50(PopoverTrigger, { asChild: !0, children: /* @__PURE__ */ jsxDEV50(Button, { variant: "outline", className: "w-[14rem] justify-start text-left font-normal", children: [
            /* @__PURE__ */ jsxDEV50(CalendarIcon5, { className: "mr-2 h-4 w-4" }, void 0, !1, {
              fileName: "src/app/components/expenses/ExpensesPage.tsx",
              lineNumber: 87,
              columnNumber: 17
            }, this),
            format10(selectedDate, "MMMM yyyy", { locale: ptBR7 })
          ] }, void 0, !0, {
            fileName: "src/app/components/expenses/ExpensesPage.tsx",
            lineNumber: 86,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "src/app/components/expenses/ExpensesPage.tsx",
            lineNumber: 85,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV50(PopoverContent, { className: "w-auto p-0", align: "end", children: /* @__PURE__ */ jsxDEV50(
            Calendar,
            {
              mode: "single",
              selected: selectedDate,
              onSelect: (date) => date && setSelectedDate(date),
              initialFocus: !0,
              className: cn("p-3 pointer-events-auto")
            },
            void 0,
            !1,
            {
              fileName: "src/app/components/expenses/ExpensesPage.tsx",
              lineNumber: 92,
              columnNumber: 15
            },
            this
          ) }, void 0, !1, {
            fileName: "src/app/components/expenses/ExpensesPage.tsx",
            lineNumber: 91,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "src/app/components/expenses/ExpensesPage.tsx",
          lineNumber: 84,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV50(
          Button,
          {
            onClick: () => setIsAddExpenseOpen(!0),
            className: "bg-vermelho hover:bg-vermelho/90",
            children: [
              /* @__PURE__ */ jsxDEV50(Plus2, { className: "h-4 w-4 mr-2" }, void 0, !1, {
                fileName: "src/app/components/expenses/ExpensesPage.tsx",
                lineNumber: 105,
                columnNumber: 13
              }, this),
              "Nova Despesa"
            ]
          },
          void 0,
          !0,
          {
            fileName: "src/app/components/expenses/ExpensesPage.tsx",
            lineNumber: 101,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "src/app/components/expenses/ExpensesPage.tsx",
        lineNumber: 83,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "src/app/components/expenses/ExpensesPage.tsx",
      lineNumber: 76,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV50("div", { className: "grid gap-6 md:grid-cols-3", children: [
      /* @__PURE__ */ jsxDEV50(Card, { children: [
        /* @__PURE__ */ jsxDEV50(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
          /* @__PURE__ */ jsxDEV50(CardTitle, { className: "text-sm font-medium", children: "Total do M\xEAs" }, void 0, !1, {
            fileName: "src/app/components/expenses/ExpensesPage.tsx",
            lineNumber: 114,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV50(ArrowDownCircle, { className: "h-4 w-4 text-vermelho" }, void 0, !1, {
            fileName: "src/app/components/expenses/ExpensesPage.tsx",
            lineNumber: 115,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "src/app/components/expenses/ExpensesPage.tsx",
          lineNumber: 113,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV50(CardContent, { children: isLoading ? /* @__PURE__ */ jsxDEV50("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsxDEV50(Loader212, { className: "h-4 w-4 animate-spin" }, void 0, !1, {
            fileName: "src/app/components/expenses/ExpensesPage.tsx",
            lineNumber: 120,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV50("span", { children: "Carregando..." }, void 0, !1, {
            fileName: "src/app/components/expenses/ExpensesPage.tsx",
            lineNumber: 121,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "src/app/components/expenses/ExpensesPage.tsx",
          lineNumber: 119,
          columnNumber: 15
        }, this) : /* @__PURE__ */ jsxDEV50(Fragment3, { children: [
          /* @__PURE__ */ jsxDEV50("div", { className: "text-2xl font-bold text-vermelho", children: [
            "R$ ",
            totalExpenses.toFixed(2)
          ] }, void 0, !0, {
            fileName: "src/app/components/expenses/ExpensesPage.tsx",
            lineNumber: 125,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV50("p", { className: "text-xs text-muted-foreground mt-1", children: format10(selectedDate, "MMMM yyyy", { locale: ptBR7 }) }, void 0, !1, {
            fileName: "src/app/components/expenses/ExpensesPage.tsx",
            lineNumber: 126,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "src/app/components/expenses/ExpensesPage.tsx",
          lineNumber: 124,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "src/app/components/expenses/ExpensesPage.tsx",
          lineNumber: 117,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "src/app/components/expenses/ExpensesPage.tsx",
        lineNumber: 112,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV50(Card, { children: [
        /* @__PURE__ */ jsxDEV50(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: /* @__PURE__ */ jsxDEV50(CardTitle, { className: "text-sm font-medium", children: "M\xE9dia Di\xE1ria" }, void 0, !1, {
          fileName: "src/app/components/expenses/ExpensesPage.tsx",
          lineNumber: 135,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "src/app/components/expenses/ExpensesPage.tsx",
          lineNumber: 134,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV50(CardContent, { children: isLoading ? /* @__PURE__ */ jsxDEV50("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsxDEV50(Loader212, { className: "h-4 w-4 animate-spin" }, void 0, !1, {
            fileName: "src/app/components/expenses/ExpensesPage.tsx",
            lineNumber: 140,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV50("span", { children: "Carregando..." }, void 0, !1, {
            fileName: "src/app/components/expenses/ExpensesPage.tsx",
            lineNumber: 141,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "src/app/components/expenses/ExpensesPage.tsx",
          lineNumber: 139,
          columnNumber: 15
        }, this) : /* @__PURE__ */ jsxDEV50(Fragment3, { children: [
          /* @__PURE__ */ jsxDEV50("div", { className: "text-2xl font-bold", children: [
            "R$ ",
            dailyAverage.toFixed(2)
          ] }, void 0, !0, {
            fileName: "src/app/components/expenses/ExpensesPage.tsx",
            lineNumber: 145,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV50("p", { className: "text-xs text-muted-foreground mt-1", children: [
            new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate(),
            " dias no m\xEAs"
          ] }, void 0, !0, {
            fileName: "src/app/components/expenses/ExpensesPage.tsx",
            lineNumber: 146,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "src/app/components/expenses/ExpensesPage.tsx",
          lineNumber: 144,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "src/app/components/expenses/ExpensesPage.tsx",
          lineNumber: 137,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "src/app/components/expenses/ExpensesPage.tsx",
        lineNumber: 133,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV50(Card, { children: [
        /* @__PURE__ */ jsxDEV50(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: /* @__PURE__ */ jsxDEV50(CardTitle, { className: "text-sm font-medium", children: "Despesas Recorrentes" }, void 0, !1, {
          fileName: "src/app/components/expenses/ExpensesPage.tsx",
          lineNumber: 155,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "src/app/components/expenses/ExpensesPage.tsx",
          lineNumber: 154,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV50(CardContent, { children: isLoading ? /* @__PURE__ */ jsxDEV50("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsxDEV50(Loader212, { className: "h-4 w-4 animate-spin" }, void 0, !1, {
            fileName: "src/app/components/expenses/ExpensesPage.tsx",
            lineNumber: 160,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV50("span", { children: "Carregando..." }, void 0, !1, {
            fileName: "src/app/components/expenses/ExpensesPage.tsx",
            lineNumber: 161,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "src/app/components/expenses/ExpensesPage.tsx",
          lineNumber: 159,
          columnNumber: 15
        }, this) : /* @__PURE__ */ jsxDEV50(Fragment3, { children: [
          /* @__PURE__ */ jsxDEV50("div", { className: "text-2xl font-bold", children: [
            "R$ ",
            recurrentExpenses.toFixed(2)
          ] }, void 0, !0, {
            fileName: "src/app/components/expenses/ExpensesPage.tsx",
            lineNumber: 165,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV50("p", { className: "text-xs text-muted-foreground mt-1", children: totalExpenses > 0 ? `${(recurrentExpenses / totalExpenses * 100).toFixed(0)}% do total de despesas` : "0% do total de despesas" }, void 0, !1, {
            fileName: "src/app/components/expenses/ExpensesPage.tsx",
            lineNumber: 166,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "src/app/components/expenses/ExpensesPage.tsx",
          lineNumber: 164,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "src/app/components/expenses/ExpensesPage.tsx",
          lineNumber: 157,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "src/app/components/expenses/ExpensesPage.tsx",
        lineNumber: 153,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "src/app/components/expenses/ExpensesPage.tsx",
      lineNumber: 111,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV50("div", { className: "grid gap-6 md:grid-cols-3", children: [
      /* @__PURE__ */ jsxDEV50(Card, { children: [
        /* @__PURE__ */ jsxDEV50(CardHeader, { children: /* @__PURE__ */ jsxDEV50(CardTitle, { children: "Por Categoria" }, void 0, !1, {
          fileName: "src/app/components/expenses/ExpensesPage.tsx",
          lineNumber: 180,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "src/app/components/expenses/ExpensesPage.tsx",
          lineNumber: 179,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV50(CardContent, { className: "h-[300px]", children: /* @__PURE__ */ jsxDEV50(ExpenseByCategoryChart, { selectedDate }, void 0, !1, {
          fileName: "src/app/components/expenses/ExpensesPage.tsx",
          lineNumber: 183,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "src/app/components/expenses/ExpensesPage.tsx",
          lineNumber: 182,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "src/app/components/expenses/ExpensesPage.tsx",
        lineNumber: 178,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV50(Card, { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxDEV50(CardHeader, { children: /* @__PURE__ */ jsxDEV50(CardTitle, { children: "Todas as Despesas" }, void 0, !1, {
          fileName: "src/app/components/expenses/ExpensesPage.tsx",
          lineNumber: 188,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "src/app/components/expenses/ExpensesPage.tsx",
          lineNumber: 187,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV50(CardContent, { children: /* @__PURE__ */ jsxDEV50(TransactionTable, { type: "expenses" }, void 0, !1, {
          fileName: "src/app/components/expenses/ExpensesPage.tsx",
          lineNumber: 191,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "src/app/components/expenses/ExpensesPage.tsx",
          lineNumber: 190,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "src/app/components/expenses/ExpensesPage.tsx",
        lineNumber: 186,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "src/app/components/expenses/ExpensesPage.tsx",
      lineNumber: 177,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV50(
      AddTransactionDialog,
      {
        open: isAddExpenseOpen,
        onOpenChange: setIsAddExpenseOpen,
        type: "despesa"
      },
      void 0,
      !1,
      {
        fileName: "src/app/components/expenses/ExpensesPage.tsx",
        lineNumber: 196,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "src/app/components/expenses/ExpensesPage.tsx",
    lineNumber: 75,
    columnNumber: 5
  }, this);
};

// src/app/routes/despesas.tsx
import { jsxDEV as jsxDEV51 } from "react/jsx-dev-runtime";
function ExpensesRoute() {
  return /* @__PURE__ */ jsxDEV51(AppLayout, { children: /* @__PURE__ */ jsxDEV51(ExpensesPage, {}, void 0, !1, {
    fileName: "src/app/routes/despesas.tsx",
    lineNumber: 7,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "src/app/routes/despesas.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// src/app/routes/expenses.tsx
var expenses_exports = {};
__export(expenses_exports, {
  default: () => ExpensesRoute2
});
import { jsxDEV as jsxDEV52 } from "react/jsx-dev-runtime";
function ExpensesRoute2() {
  return /* @__PURE__ */ jsxDEV52(AppLayout, { children: /* @__PURE__ */ jsxDEV52(ExpensesPage, {}, void 0, !1, {
    fileName: "src/app/routes/expenses.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "src/app/routes/expenses.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// src/app/routes/receitas.tsx
var receitas_exports = {};
__export(receitas_exports, {
  default: () => IncomeRoute
});

// src/app/components/income/IncomePage.tsx
import { useState as useState20, useEffect as useEffect16 } from "react";
import { format as format11 } from "date-fns";
import { ptBR as ptBR8 } from "date-fns/locale";
import { CalendarIcon as CalendarIcon6, Plus as Plus3, ArrowUpCircle, Loader2 as Loader213 } from "lucide-react";
import { Fragment as Fragment4, jsxDEV as jsxDEV53 } from "react/jsx-dev-runtime";
var IncomePage = () => {
  let [selectedDate, setSelectedDate] = useState20(/* @__PURE__ */ new Date()), [isAddIncomeOpen, setIsAddIncomeOpen] = useState20(!1), [totalIncome, setTotalIncome] = useState20(0), [fixedIncome, setFixedIncome] = useState20(0), [extraIncome, setExtraIncome] = useState20(0), [isLoading, setIsLoading] = useState20(!0);
  return useEffect16(() => {
    (async () => {
      try {
        setIsLoading(!0);
        let currentMonth = format11(selectedDate, "MM"), currentYear = format11(selectedDate, "yyyy"), startDate = `${currentYear}-${currentMonth}-01`, lastDay = new Date(parseInt(currentYear), parseInt(currentMonth), 0).getDate(), endDate = `${currentYear}-${currentMonth}-${lastDay}`, { data: incomeData, error: incomeError } = await supabase.from("transactions").select("amount, recurrent, category").eq("type", "income").gte("date", startDate).lte("date", endDate);
        if (incomeError) {
          console.error("Error fetching income data:", incomeError);
          return;
        }
        let totalAmount = incomeData?.reduce((sum, item) => sum + parseFloat(String(item.amount)), 0) || 0;
        setTotalIncome(totalAmount);
        let recurrentAmount = incomeData?.filter((item) => item.recurrent).reduce((sum, item) => sum + parseFloat(String(item.amount)), 0) || 0;
        setFixedIncome(recurrentAmount);
        let extraAmount = incomeData?.filter((item) => !item.recurrent).reduce((sum, item) => sum + parseFloat(String(item.amount)), 0) || 0;
        setExtraIncome(extraAmount);
      } catch (error) {
        console.error("Error calculating income summary:", error);
      } finally {
        setIsLoading(!1);
      }
    })();
  }, [selectedDate, isAddIncomeOpen]), /* @__PURE__ */ jsxDEV53("div", { className: "space-y-8 pb-16 md:pb-8", children: [
    /* @__PURE__ */ jsxDEV53("div", { className: "flex flex-col md:flex-row md:items-center md:justify-between gap-4", children: [
      /* @__PURE__ */ jsxDEV53("div", { children: [
        /* @__PURE__ */ jsxDEV53("h1", { className: "text-3xl font-bold tracking-tight", children: "Receitas" }, void 0, !1, {
          fileName: "src/app/components/income/IncomePage.tsx",
          lineNumber: 81,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV53("p", { className: "text-muted-foreground", children: "Gerencie e acompanhe todas as suas receitas." }, void 0, !1, {
          fileName: "src/app/components/income/IncomePage.tsx",
          lineNumber: 82,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "src/app/components/income/IncomePage.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV53("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsxDEV53(Popover, { children: [
          /* @__PURE__ */ jsxDEV53(PopoverTrigger, { asChild: !0, children: /* @__PURE__ */ jsxDEV53(Button, { variant: "outline", className: "w-[14rem] justify-start text-left font-normal", children: [
            /* @__PURE__ */ jsxDEV53(CalendarIcon6, { className: "mr-2 h-4 w-4" }, void 0, !1, {
              fileName: "src/app/components/income/IncomePage.tsx",
              lineNumber: 90,
              columnNumber: 17
            }, this),
            format11(selectedDate, "MMMM yyyy", { locale: ptBR8 })
          ] }, void 0, !0, {
            fileName: "src/app/components/income/IncomePage.tsx",
            lineNumber: 89,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "src/app/components/income/IncomePage.tsx",
            lineNumber: 88,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV53(PopoverContent, { className: "w-auto p-0", align: "end", children: /* @__PURE__ */ jsxDEV53(
            Calendar,
            {
              mode: "single",
              selected: selectedDate,
              onSelect: (date) => date && setSelectedDate(date),
              initialFocus: !0,
              className: cn("p-3 pointer-events-auto")
            },
            void 0,
            !1,
            {
              fileName: "src/app/components/income/IncomePage.tsx",
              lineNumber: 95,
              columnNumber: 15
            },
            this
          ) }, void 0, !1, {
            fileName: "src/app/components/income/IncomePage.tsx",
            lineNumber: 94,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "src/app/components/income/IncomePage.tsx",
          lineNumber: 87,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV53(
          Button,
          {
            onClick: () => setIsAddIncomeOpen(!0),
            className: "bg-verde hover:bg-verde/90",
            children: [
              /* @__PURE__ */ jsxDEV53(Plus3, { className: "h-4 w-4 mr-2" }, void 0, !1, {
                fileName: "src/app/components/income/IncomePage.tsx",
                lineNumber: 108,
                columnNumber: 13
              }, this),
              "Nova Receita"
            ]
          },
          void 0,
          !0,
          {
            fileName: "src/app/components/income/IncomePage.tsx",
            lineNumber: 104,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "src/app/components/income/IncomePage.tsx",
        lineNumber: 86,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "src/app/components/income/IncomePage.tsx",
      lineNumber: 79,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV53("div", { className: "grid gap-6 md:grid-cols-3", children: [
      /* @__PURE__ */ jsxDEV53(Card, { children: [
        /* @__PURE__ */ jsxDEV53(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
          /* @__PURE__ */ jsxDEV53(CardTitle, { className: "text-sm font-medium", children: "Total do M\xEAs" }, void 0, !1, {
            fileName: "src/app/components/income/IncomePage.tsx",
            lineNumber: 117,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV53(ArrowUpCircle, { className: "h-4 w-4 text-verde" }, void 0, !1, {
            fileName: "src/app/components/income/IncomePage.tsx",
            lineNumber: 118,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "src/app/components/income/IncomePage.tsx",
          lineNumber: 116,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV53(CardContent, { children: isLoading ? /* @__PURE__ */ jsxDEV53("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsxDEV53(Loader213, { className: "h-4 w-4 animate-spin" }, void 0, !1, {
            fileName: "src/app/components/income/IncomePage.tsx",
            lineNumber: 123,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV53("span", { children: "Carregando..." }, void 0, !1, {
            fileName: "src/app/components/income/IncomePage.tsx",
            lineNumber: 124,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "src/app/components/income/IncomePage.tsx",
          lineNumber: 122,
          columnNumber: 15
        }, this) : /* @__PURE__ */ jsxDEV53(Fragment4, { children: [
          /* @__PURE__ */ jsxDEV53("div", { className: "text-2xl font-bold text-verde", children: [
            "R$ ",
            totalIncome.toFixed(2)
          ] }, void 0, !0, {
            fileName: "src/app/components/income/IncomePage.tsx",
            lineNumber: 128,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV53("p", { className: "text-xs text-muted-foreground mt-1", children: format11(selectedDate, "MMMM yyyy", { locale: ptBR8 }) }, void 0, !1, {
            fileName: "src/app/components/income/IncomePage.tsx",
            lineNumber: 129,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "src/app/components/income/IncomePage.tsx",
          lineNumber: 127,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "src/app/components/income/IncomePage.tsx",
          lineNumber: 120,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "src/app/components/income/IncomePage.tsx",
        lineNumber: 115,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV53(Card, { children: [
        /* @__PURE__ */ jsxDEV53(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: /* @__PURE__ */ jsxDEV53(CardTitle, { className: "text-sm font-medium", children: "Receitas Fixas" }, void 0, !1, {
          fileName: "src/app/components/income/IncomePage.tsx",
          lineNumber: 138,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "src/app/components/income/IncomePage.tsx",
          lineNumber: 137,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV53(CardContent, { children: isLoading ? /* @__PURE__ */ jsxDEV53("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsxDEV53(Loader213, { className: "h-4 w-4 animate-spin" }, void 0, !1, {
            fileName: "src/app/components/income/IncomePage.tsx",
            lineNumber: 143,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV53("span", { children: "Carregando..." }, void 0, !1, {
            fileName: "src/app/components/income/IncomePage.tsx",
            lineNumber: 144,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "src/app/components/income/IncomePage.tsx",
          lineNumber: 142,
          columnNumber: 15
        }, this) : /* @__PURE__ */ jsxDEV53(Fragment4, { children: [
          /* @__PURE__ */ jsxDEV53("div", { className: "text-2xl font-bold", children: [
            "R$ ",
            fixedIncome.toFixed(2)
          ] }, void 0, !0, {
            fileName: "src/app/components/income/IncomePage.tsx",
            lineNumber: 148,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV53("p", { className: "text-xs text-muted-foreground mt-1", children: totalIncome > 0 ? `${(fixedIncome / totalIncome * 100).toFixed(0)}% do total de receitas` : "0% do total de receitas" }, void 0, !1, {
            fileName: "src/app/components/income/IncomePage.tsx",
            lineNumber: 149,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "src/app/components/income/IncomePage.tsx",
          lineNumber: 147,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "src/app/components/income/IncomePage.tsx",
          lineNumber: 140,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "src/app/components/income/IncomePage.tsx",
        lineNumber: 136,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV53(Card, { children: [
        /* @__PURE__ */ jsxDEV53(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: /* @__PURE__ */ jsxDEV53(CardTitle, { className: "text-sm font-medium", children: "Receitas Extras" }, void 0, !1, {
          fileName: "src/app/components/income/IncomePage.tsx",
          lineNumber: 160,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "src/app/components/income/IncomePage.tsx",
          lineNumber: 159,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV53(CardContent, { children: isLoading ? /* @__PURE__ */ jsxDEV53("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsxDEV53(Loader213, { className: "h-4 w-4 animate-spin" }, void 0, !1, {
            fileName: "src/app/components/income/IncomePage.tsx",
            lineNumber: 165,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV53("span", { children: "Carregando..." }, void 0, !1, {
            fileName: "src/app/components/income/IncomePage.tsx",
            lineNumber: 166,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "src/app/components/income/IncomePage.tsx",
          lineNumber: 164,
          columnNumber: 15
        }, this) : /* @__PURE__ */ jsxDEV53(Fragment4, { children: [
          /* @__PURE__ */ jsxDEV53("div", { className: "text-2xl font-bold", children: [
            "R$ ",
            extraIncome.toFixed(2)
          ] }, void 0, !0, {
            fileName: "src/app/components/income/IncomePage.tsx",
            lineNumber: 170,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV53("p", { className: "text-xs text-muted-foreground mt-1", children: totalIncome > 0 ? `${(extraIncome / totalIncome * 100).toFixed(0)}% do total de receitas` : "0% do total de receitas" }, void 0, !1, {
            fileName: "src/app/components/income/IncomePage.tsx",
            lineNumber: 171,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "src/app/components/income/IncomePage.tsx",
          lineNumber: 169,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "src/app/components/income/IncomePage.tsx",
          lineNumber: 162,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "src/app/components/income/IncomePage.tsx",
        lineNumber: 158,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "src/app/components/income/IncomePage.tsx",
      lineNumber: 114,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV53("div", { className: "grid gap-6 md:grid-cols-3", children: [
      /* @__PURE__ */ jsxDEV53(Card, { children: [
        /* @__PURE__ */ jsxDEV53(CardHeader, { children: /* @__PURE__ */ jsxDEV53(CardTitle, { children: "Por Categoria" }, void 0, !1, {
          fileName: "src/app/components/income/IncomePage.tsx",
          lineNumber: 185,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "src/app/components/income/IncomePage.tsx",
          lineNumber: 184,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV53(CardContent, { className: "h-[300px]", children: /* @__PURE__ */ jsxDEV53(ExpenseByCategoryChart, { isIncome: !0, selectedDate }, void 0, !1, {
          fileName: "src/app/components/income/IncomePage.tsx",
          lineNumber: 188,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "src/app/components/income/IncomePage.tsx",
          lineNumber: 187,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "src/app/components/income/IncomePage.tsx",
        lineNumber: 183,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV53(Card, { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxDEV53(CardHeader, { children: /* @__PURE__ */ jsxDEV53(CardTitle, { children: "Todas as Receitas" }, void 0, !1, {
          fileName: "src/app/components/income/IncomePage.tsx",
          lineNumber: 193,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "src/app/components/income/IncomePage.tsx",
          lineNumber: 192,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV53(CardContent, { children: /* @__PURE__ */ jsxDEV53(TransactionTable, { type: "income" }, void 0, !1, {
          fileName: "src/app/components/income/IncomePage.tsx",
          lineNumber: 196,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "src/app/components/income/IncomePage.tsx",
          lineNumber: 195,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "src/app/components/income/IncomePage.tsx",
        lineNumber: 191,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "src/app/components/income/IncomePage.tsx",
      lineNumber: 182,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV53(
      AddTransactionDialog,
      {
        open: isAddIncomeOpen,
        onOpenChange: setIsAddIncomeOpen,
        type: "receita"
      },
      void 0,
      !1,
      {
        fileName: "src/app/components/income/IncomePage.tsx",
        lineNumber: 201,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "src/app/components/income/IncomePage.tsx",
    lineNumber: 78,
    columnNumber: 5
  }, this);
};

// src/app/routes/receitas.tsx
import { jsxDEV as jsxDEV54 } from "react/jsx-dev-runtime";
function IncomeRoute() {
  return /* @__PURE__ */ jsxDEV54(AppLayout, { children: /* @__PURE__ */ jsxDEV54(IncomePage, {}, void 0, !1, {
    fileName: "src/app/routes/receitas.tsx",
    lineNumber: 7,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "src/app/routes/receitas.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// src/app/routes/analise.tsx
var analise_exports = {};
__export(analise_exports, {
  default: () => AnalyticsRoute2
});
import { jsxDEV as jsxDEV55 } from "react/jsx-dev-runtime";
function AnalyticsRoute2() {
  return /* @__PURE__ */ jsxDEV55(AppLayout, { children: /* @__PURE__ */ jsxDEV55(AnalyticsPage, {}, void 0, !1, {
    fileName: "src/app/routes/analise.tsx",
    lineNumber: 7,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "src/app/routes/analise.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// src/app/routes/profile.tsx
var profile_exports = {};
__export(profile_exports, {
  default: () => ProfileRoute
});

// src/app/components/profile/ProfilePage.tsx
import { useEffect as useEffect17, useState as useState21 } from "react";
import { Loader2 as Loader214, Save } from "lucide-react";
import { toast as toast7 } from "sonner";
import { useNavigate as useNavigate2 } from "react-router-dom";
import { jsxDEV as jsxDEV56 } from "react/jsx-dev-runtime";
var FINANCIAL_GOALS = [
  { value: "save_money", label: "Economizar dinheiro" },
  { value: "pay_debts", label: "Quitar d\xEDvidas" },
  { value: "invest", label: "Investir" },
  { value: "buy_house", label: "Comprar uma casa" },
  { value: "buy_car", label: "Comprar um carro" },
  { value: "travel", label: "Viajar" },
  { value: "retirement", label: "Aposentadoria" },
  { value: "other", label: "Outro" }
], ProfilePage = () => {
  let [profile, setProfile] = useState21(null), [isLoading, setIsLoading] = useState21(!0), [isSaving, setIsSaving] = useState21(!1), [fullName, setFullName] = useState21(""), [avatarUrl, setAvatarUrl] = useState21(""), [financialGoal, setFinancialGoal] = useState21(null), [avatarFile, setAvatarFile] = useState21(null), navigate = useNavigate2();
  useEffect17(() => {
    (async () => {
      try {
        setIsLoading(!0);
        let { data: { user } } = await supabase.auth.getUser();
        if (!user)
          throw new Error("User not found");
        let { data, error } = await supabase.from("user_profiles").select("*").eq("id", user.id).single();
        error ? (console.error("Error fetching profile:", error), toast7.error("Erro ao carregar perfil", {
          description: error.message
        })) : data && (setProfile(data), setFullName(data.full_name || ""), setAvatarUrl(data.avatar_url || ""), setFinancialGoal(data.financial_goal));
      } catch (error) {
        console.error("Error:", error), toast7.error("Erro ao carregar perfil");
      } finally {
        setIsLoading(!1);
      }
    })();
  }, []);
  let handleAvatarChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let file = e.target.files[0];
      setAvatarFile(file), setAvatarUrl(URL.createObjectURL(file));
    }
  }, handleSaveProfile = async () => {
    try {
      if (setIsSaving(!0), !profile)
        return;
      let finalAvatarUrl = avatarUrl;
      if (avatarFile) {
        let fileExt = avatarFile.name.split(".").pop(), fileName = `${profile.id}-${Math.random()}.${fileExt}`, { data, error: error2 } = await supabase.storage.from("avatars").upload(fileName, avatarFile);
        if (error2)
          throw error2;
        let { data: { publicUrl } } = supabase.storage.from("avatars").getPublicUrl(fileName);
        finalAvatarUrl = publicUrl;
      }
      let { error } = await supabase.from("user_profiles").update({
        full_name: fullName,
        avatar_url: finalAvatarUrl,
        financial_goal: financialGoal,
        updated_at: (/* @__PURE__ */ new Date()).toISOString()
      }).eq("id", profile.id);
      if (error)
        throw error;
      toast7.success("Perfil atualizado", {
        description: "Suas informa\xE7\xF5es foram salvas com sucesso."
      }), navigate("/");
    } catch (error) {
      console.error("Error saving profile:", error), toast7.error("Erro ao salvar perfil", {
        description: error.message || "Tente novamente mais tarde."
      });
    } finally {
      setIsSaving(!1);
    }
  };
  return isLoading ? /* @__PURE__ */ jsxDEV56("div", { className: "flex items-center justify-center min-h-[70vh]", children: /* @__PURE__ */ jsxDEV56(Loader214, { className: "h-8 w-8 animate-spin text-primary" }, void 0, !1, {
    fileName: "src/app/components/profile/ProfilePage.tsx",
    lineNumber: 171,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "src/app/components/profile/ProfilePage.tsx",
    lineNumber: 170,
    columnNumber: 7
  }, this) : /* @__PURE__ */ jsxDEV56("div", { className: "space-y-8 pb-16 md:pb-8", children: [
    /* @__PURE__ */ jsxDEV56("div", { children: [
      /* @__PURE__ */ jsxDEV56("h1", { className: "text-3xl font-bold tracking-tight", children: "Seu Perfil" }, void 0, !1, {
        fileName: "src/app/components/profile/ProfilePage.tsx",
        lineNumber: 179,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV56("p", { className: "text-muted-foreground", children: "Gerencie suas informa\xE7\xF5es e prefer\xEAncias pessoais." }, void 0, !1, {
        fileName: "src/app/components/profile/ProfilePage.tsx",
        lineNumber: 180,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "src/app/components/profile/ProfilePage.tsx",
      lineNumber: 178,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV56(Card, { children: [
      /* @__PURE__ */ jsxDEV56(CardHeader, { children: /* @__PURE__ */ jsxDEV56(CardTitle, { children: "Informa\xE7\xF5es Pessoais" }, void 0, !1, {
        fileName: "src/app/components/profile/ProfilePage.tsx",
        lineNumber: 187,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "src/app/components/profile/ProfilePage.tsx",
        lineNumber: 186,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV56(CardContent, { className: "space-y-6", children: [
        /* @__PURE__ */ jsxDEV56("div", { className: "flex flex-col items-center space-y-4 sm:items-start sm:flex-row sm:space-y-0 sm:space-x-6", children: [
          /* @__PURE__ */ jsxDEV56("div", { className: "relative group", children: [
            /* @__PURE__ */ jsxDEV56(Avatar, { className: "h-24 w-24 border-2 border-muted", children: [
              /* @__PURE__ */ jsxDEV56(AvatarImage, { src: avatarUrl, alt: fullName }, void 0, !1, {
                fileName: "src/app/components/profile/ProfilePage.tsx",
                lineNumber: 193,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV56(AvatarFallback, { className: "text-xl", children: fullName?.substring(0, 2) || "U" }, void 0, !1, {
                fileName: "src/app/components/profile/ProfilePage.tsx",
                lineNumber: 194,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "src/app/components/profile/ProfilePage.tsx",
              lineNumber: 192,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV56("label", { className: "absolute inset-0 flex items-center justify-center bg-black/50 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity", children: [
              /* @__PURE__ */ jsxDEV56("span", { className: "text-white text-xs font-medium", children: "Alterar" }, void 0, !1, {
                fileName: "src/app/components/profile/ProfilePage.tsx",
                lineNumber: 199,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV56("input", { type: "file", className: "sr-only", onChange: handleAvatarChange, accept: "image/*" }, void 0, !1, {
                fileName: "src/app/components/profile/ProfilePage.tsx",
                lineNumber: 200,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "src/app/components/profile/ProfilePage.tsx",
              lineNumber: 198,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "src/app/components/profile/ProfilePage.tsx",
            lineNumber: 191,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV56("div", { className: "space-y-4 flex-1", children: /* @__PURE__ */ jsxDEV56("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxDEV56(Label2, { htmlFor: "fullName", children: "Nome Completo" }, void 0, !1, {
              fileName: "src/app/components/profile/ProfilePage.tsx",
              lineNumber: 206,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV56(
              Input,
              {
                id: "fullName",
                value: fullName,
                onChange: (e) => setFullName(e.target.value),
                placeholder: "Seu nome completo"
              },
              void 0,
              !1,
              {
                fileName: "src/app/components/profile/ProfilePage.tsx",
                lineNumber: 207,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "src/app/components/profile/ProfilePage.tsx",
            lineNumber: 205,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "src/app/components/profile/ProfilePage.tsx",
            lineNumber: 204,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "src/app/components/profile/ProfilePage.tsx",
          lineNumber: 190,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV56("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxDEV56(Label2, { htmlFor: "financialGoal", children: "Objetivo Financeiro Principal" }, void 0, !1, {
            fileName: "src/app/components/profile/ProfilePage.tsx",
            lineNumber: 218,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV56(
            Select,
            {
              value: financialGoal || void 0,
              onValueChange: setFinancialGoal,
              children: [
                /* @__PURE__ */ jsxDEV56(SelectTrigger, { children: /* @__PURE__ */ jsxDEV56(SelectValue, { placeholder: "Selecione seu objetivo financeiro" }, void 0, !1, {
                  fileName: "src/app/components/profile/ProfilePage.tsx",
                  lineNumber: 224,
                  columnNumber: 17
                }, this) }, void 0, !1, {
                  fileName: "src/app/components/profile/ProfilePage.tsx",
                  lineNumber: 223,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV56(SelectContent, { children: FINANCIAL_GOALS.map((goal) => /* @__PURE__ */ jsxDEV56(SelectItem, { value: goal.value, children: goal.label }, goal.value, !1, {
                  fileName: "src/app/components/profile/ProfilePage.tsx",
                  lineNumber: 228,
                  columnNumber: 19
                }, this)) }, void 0, !1, {
                  fileName: "src/app/components/profile/ProfilePage.tsx",
                  lineNumber: 226,
                  columnNumber: 15
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "src/app/components/profile/ProfilePage.tsx",
              lineNumber: 219,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "src/app/components/profile/ProfilePage.tsx",
          lineNumber: 217,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV56("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxDEV56(Button, { onClick: handleSaveProfile, disabled: isSaving, children: [
          isSaving ? /* @__PURE__ */ jsxDEV56(Loader214, { className: "h-4 w-4 mr-2 animate-spin" }, void 0, !1, {
            fileName: "src/app/components/profile/ProfilePage.tsx",
            lineNumber: 239,
            columnNumber: 17
          }, this) : /* @__PURE__ */ jsxDEV56(Save, { className: "h-4 w-4 mr-2" }, void 0, !1, {
            fileName: "src/app/components/profile/ProfilePage.tsx",
            lineNumber: 241,
            columnNumber: 17
          }, this),
          "Salvar Altera\xE7\xF5es"
        ] }, void 0, !0, {
          fileName: "src/app/components/profile/ProfilePage.tsx",
          lineNumber: 237,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "src/app/components/profile/ProfilePage.tsx",
          lineNumber: 236,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "src/app/components/profile/ProfilePage.tsx",
        lineNumber: 189,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "src/app/components/profile/ProfilePage.tsx",
      lineNumber: 185,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "src/app/components/profile/ProfilePage.tsx",
    lineNumber: 177,
    columnNumber: 5
  }, this);
};

// src/app/routes/profile.tsx
import { jsxDEV as jsxDEV57 } from "react/jsx-dev-runtime";
function ProfileRoute() {
  return /* @__PURE__ */ jsxDEV57(AppLayout, { children: /* @__PURE__ */ jsxDEV57(ProfilePage, {}, void 0, !1, {
    fileName: "src/app/routes/profile.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "src/app/routes/profile.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// src/app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => IndexRoute
});
import { jsxDEV as jsxDEV58 } from "react/jsx-dev-runtime";
function IndexRoute() {
  return /* @__PURE__ */ jsxDEV58(AppLayout, { children: /* @__PURE__ */ jsxDEV58(DashboardPage, {}, void 0, !1, {
    fileName: "src/app/routes/_index.tsx",
    lineNumber: 7,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "src/app/routes/_index.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// src/app/routes/budget.tsx
var budget_exports = {};
__export(budget_exports, {
  default: () => BudgetRoute2
});
import { jsxDEV as jsxDEV59 } from "react/jsx-dev-runtime";
function BudgetRoute2() {
  return /* @__PURE__ */ jsxDEV59(AppLayout, { children: /* @__PURE__ */ jsxDEV59(BudgetPage, {}, void 0, !1, {
    fileName: "src/app/routes/budget.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "src/app/routes/budget.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// src/app/routes/income.tsx
var income_exports = {};
__export(income_exports, {
  default: () => IncomeRoute2
});
import { jsxDEV as jsxDEV60 } from "react/jsx-dev-runtime";
function IncomeRoute2() {
  return /* @__PURE__ */ jsxDEV60(AppLayout, { children: /* @__PURE__ */ jsxDEV60(IncomePage, {}, void 0, !1, {
    fileName: "src/app/routes/income.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "src/app/routes/income.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// src/app/routes/wallet.tsx
var wallet_exports = {};
__export(wallet_exports, {
  default: () => WalletRoute2
});
import { jsxDEV as jsxDEV61 } from "react/jsx-dev-runtime";
function WalletRoute2() {
  return /* @__PURE__ */ jsxDEV61(AppLayout, { children: /* @__PURE__ */ jsxDEV61(WalletPage, {}, void 0, !1, {
    fileName: "src/app/routes/wallet.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "src/app/routes/wallet.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// src/app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action,
  default: () => LoginPage
});
import { Form, useActionData, useNavigation } from "@remix-run/react";
import { json } from "@remix-run/node";
import { toast as toast8 } from "sonner";
import { jsxDEV as jsxDEV62 } from "react/jsx-dev-runtime";
async function action({ request }) {
  let formData = await request.formData(), email = formData.get("email"), password = formData.get("password"), { error } = await supabase.auth.signInWithPassword({
    email,
    password
  });
  return error ? json({ error: error.message }, { status: 400 }) : json({ success: !0 });
}
function LoginPage() {
  let actionData = useActionData(), isSubmitting = useNavigation().state === "submitting";
  return actionData?.error && toast8.error(actionData.error), /* @__PURE__ */ jsxDEV62("div", { className: "flex min-h-screen items-center justify-center bg-background p-4", children: /* @__PURE__ */ jsxDEV62(Card, { className: "w-full max-w-md", children: [
    /* @__PURE__ */ jsxDEV62(CardHeader, { children: [
      /* @__PURE__ */ jsxDEV62(CardTitle, { children: "Login" }, void 0, !1, {
        fileName: "src/app/routes/login.tsx",
        lineNumber: 40,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV62(CardDescription, { children: "Entre com suas credenciais para acessar o dashboard" }, void 0, !1, {
        fileName: "src/app/routes/login.tsx",
        lineNumber: 41,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "src/app/routes/login.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV62(CardContent, { children: /* @__PURE__ */ jsxDEV62(Form, { method: "post", className: "space-y-4", children: [
      /* @__PURE__ */ jsxDEV62("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxDEV62(Label2, { htmlFor: "email", children: "Email" }, void 0, !1, {
          fileName: "src/app/routes/login.tsx",
          lineNumber: 48,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV62(
          Input,
          {
            id: "email",
            name: "email",
            type: "email",
            required: !0,
            placeholder: "seu@email.com"
          },
          void 0,
          !1,
          {
            fileName: "src/app/routes/login.tsx",
            lineNumber: 49,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "src/app/routes/login.tsx",
        lineNumber: 47,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV62("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxDEV62(Label2, { htmlFor: "password", children: "Senha" }, void 0, !1, {
          fileName: "src/app/routes/login.tsx",
          lineNumber: 58,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV62(
          Input,
          {
            id: "password",
            name: "password",
            type: "password",
            required: !0,
            placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
          },
          void 0,
          !1,
          {
            fileName: "src/app/routes/login.tsx",
            lineNumber: 59,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "src/app/routes/login.tsx",
        lineNumber: 57,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV62(
        Button,
        {
          type: "submit",
          className: "w-full",
          disabled: isSubmitting,
          children: isSubmitting ? "Entrando..." : "Entrar"
        },
        void 0,
        !1,
        {
          fileName: "src/app/routes/login.tsx",
          lineNumber: 67,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "src/app/routes/login.tsx",
      lineNumber: 46,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "src/app/routes/login.tsx",
      lineNumber: 45,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "src/app/routes/login.tsx",
    lineNumber: 38,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "src/app/routes/login.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-ZF2AXINF.js", imports: ["/build/_shared/chunk-O4BRYNJ4.js", "/build/_shared/chunk-JLVQON45.js", "/build/_shared/chunk-TIJ4GCZ6.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-U4FRFQSK.js", "/build/_shared/chunk-XGOTYLZ5.js", "/build/_shared/chunk-7M6SC7J5.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-FNQRBM2V.js", imports: ["/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-KVKTSLHP.js", "/build/_shared/chunk-SM2ISG4D.js", "/build/_shared/chunk-PH7FC7E6.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-POI54T7P.js", imports: ["/build/_shared/chunk-MPKT3Y5O.js", "/build/_shared/chunk-K2JW2WL4.js", "/build/_shared/chunk-SCBSLVNF.js", "/build/_shared/chunk-WANUX2WZ.js", "/build/_shared/chunk-X3LKQEZF.js", "/build/_shared/chunk-JEL3XKU5.js", "/build/_shared/chunk-LZY6ZCCX.js", "/build/_shared/chunk-6FSDAZCT.js", "/build/_shared/chunk-KDYGWEJ6.js", "/build/_shared/chunk-B43JI2TA.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/analise": { id: "routes/analise", parentId: "root", path: "analise", index: void 0, caseSensitive: void 0, module: "/build/routes/analise-KLFDVTP3.js", imports: ["/build/_shared/chunk-TWXUEOQM.js", "/build/_shared/chunk-7MPDYXDX.js", "/build/_shared/chunk-IAQQJI4B.js", "/build/_shared/chunk-SCBSLVNF.js", "/build/_shared/chunk-WANUX2WZ.js", "/build/_shared/chunk-6FSDAZCT.js", "/build/_shared/chunk-KDYGWEJ6.js", "/build/_shared/chunk-B43JI2TA.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/analytics": { id: "routes/analytics", parentId: "root", path: "analytics", index: void 0, caseSensitive: void 0, module: "/build/routes/analytics-JFZWMXHR.js", imports: ["/build/_shared/chunk-TWXUEOQM.js", "/build/_shared/chunk-7MPDYXDX.js", "/build/_shared/chunk-IAQQJI4B.js", "/build/_shared/chunk-SCBSLVNF.js", "/build/_shared/chunk-WANUX2WZ.js", "/build/_shared/chunk-6FSDAZCT.js", "/build/_shared/chunk-KDYGWEJ6.js", "/build/_shared/chunk-B43JI2TA.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/budget": { id: "routes/budget", parentId: "root", path: "budget", index: void 0, caseSensitive: void 0, module: "/build/routes/budget-NZ7UFEWF.js", imports: ["/build/_shared/chunk-YH7Q5TOW.js", "/build/_shared/chunk-WANUX2WZ.js", "/build/_shared/chunk-X3LKQEZF.js", "/build/_shared/chunk-JEL3XKU5.js", "/build/_shared/chunk-LZY6ZCCX.js", "/build/_shared/chunk-6FSDAZCT.js", "/build/_shared/chunk-KDYGWEJ6.js", "/build/_shared/chunk-B43JI2TA.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/carteiras": { id: "routes/carteiras", parentId: "root", path: "carteiras", index: void 0, caseSensitive: void 0, module: "/build/routes/carteiras-J3B7ACIW.js", imports: ["/build/_shared/chunk-CCHL4YUT.js", "/build/_shared/chunk-7MPDYXDX.js", "/build/_shared/chunk-X3LKQEZF.js", "/build/_shared/chunk-JEL3XKU5.js", "/build/_shared/chunk-LZY6ZCCX.js", "/build/_shared/chunk-6FSDAZCT.js", "/build/_shared/chunk-KDYGWEJ6.js", "/build/_shared/chunk-B43JI2TA.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/dashboard": { id: "routes/dashboard", parentId: "root", path: "dashboard", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard-XY5AKX5U.js", imports: ["/build/_shared/chunk-MPKT3Y5O.js", "/build/_shared/chunk-K2JW2WL4.js", "/build/_shared/chunk-SCBSLVNF.js", "/build/_shared/chunk-WANUX2WZ.js", "/build/_shared/chunk-X3LKQEZF.js", "/build/_shared/chunk-JEL3XKU5.js", "/build/_shared/chunk-LZY6ZCCX.js", "/build/_shared/chunk-6FSDAZCT.js", "/build/_shared/chunk-KDYGWEJ6.js", "/build/_shared/chunk-B43JI2TA.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/despesas": { id: "routes/despesas", parentId: "root", path: "despesas", index: void 0, caseSensitive: void 0, module: "/build/routes/despesas-3LESGZZY.js", imports: ["/build/_shared/chunk-5QIADSVW.js", "/build/_shared/chunk-IAQQJI4B.js", "/build/_shared/chunk-K2JW2WL4.js", "/build/_shared/chunk-SCBSLVNF.js", "/build/_shared/chunk-WANUX2WZ.js", "/build/_shared/chunk-X3LKQEZF.js", "/build/_shared/chunk-JEL3XKU5.js", "/build/_shared/chunk-LZY6ZCCX.js", "/build/_shared/chunk-6FSDAZCT.js", "/build/_shared/chunk-KDYGWEJ6.js", "/build/_shared/chunk-B43JI2TA.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/expenses": { id: "routes/expenses", parentId: "root", path: "expenses", index: void 0, caseSensitive: void 0, module: "/build/routes/expenses-LDFAJ6BR.js", imports: ["/build/_shared/chunk-5QIADSVW.js", "/build/_shared/chunk-IAQQJI4B.js", "/build/_shared/chunk-K2JW2WL4.js", "/build/_shared/chunk-SCBSLVNF.js", "/build/_shared/chunk-WANUX2WZ.js", "/build/_shared/chunk-X3LKQEZF.js", "/build/_shared/chunk-JEL3XKU5.js", "/build/_shared/chunk-LZY6ZCCX.js", "/build/_shared/chunk-6FSDAZCT.js", "/build/_shared/chunk-KDYGWEJ6.js", "/build/_shared/chunk-B43JI2TA.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/income": { id: "routes/income", parentId: "root", path: "income", index: void 0, caseSensitive: void 0, module: "/build/routes/income-R6QVZOAD.js", imports: ["/build/_shared/chunk-DBPR7HOP.js", "/build/_shared/chunk-IAQQJI4B.js", "/build/_shared/chunk-K2JW2WL4.js", "/build/_shared/chunk-SCBSLVNF.js", "/build/_shared/chunk-WANUX2WZ.js", "/build/_shared/chunk-X3LKQEZF.js", "/build/_shared/chunk-JEL3XKU5.js", "/build/_shared/chunk-LZY6ZCCX.js", "/build/_shared/chunk-6FSDAZCT.js", "/build/_shared/chunk-KDYGWEJ6.js", "/build/_shared/chunk-B43JI2TA.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-GQWOFOLT.js", imports: ["/build/_shared/chunk-LZY6ZCCX.js", "/build/_shared/chunk-KDYGWEJ6.js", "/build/_shared/chunk-B43JI2TA.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/orcamentos": { id: "routes/orcamentos", parentId: "root", path: "orcamentos", index: void 0, caseSensitive: void 0, module: "/build/routes/orcamentos-UVY2ACLJ.js", imports: ["/build/_shared/chunk-YH7Q5TOW.js", "/build/_shared/chunk-WANUX2WZ.js", "/build/_shared/chunk-X3LKQEZF.js", "/build/_shared/chunk-JEL3XKU5.js", "/build/_shared/chunk-LZY6ZCCX.js", "/build/_shared/chunk-6FSDAZCT.js", "/build/_shared/chunk-KDYGWEJ6.js", "/build/_shared/chunk-B43JI2TA.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/profile": { id: "routes/profile", parentId: "root", path: "profile", index: void 0, caseSensitive: void 0, module: "/build/routes/profile-O6XNDULL.js", imports: ["/build/_shared/chunk-JEL3XKU5.js", "/build/_shared/chunk-LZY6ZCCX.js", "/build/_shared/chunk-6FSDAZCT.js", "/build/_shared/chunk-KDYGWEJ6.js", "/build/_shared/chunk-B43JI2TA.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/receitas": { id: "routes/receitas", parentId: "root", path: "receitas", index: void 0, caseSensitive: void 0, module: "/build/routes/receitas-MFPFNWEI.js", imports: ["/build/_shared/chunk-DBPR7HOP.js", "/build/_shared/chunk-IAQQJI4B.js", "/build/_shared/chunk-K2JW2WL4.js", "/build/_shared/chunk-SCBSLVNF.js", "/build/_shared/chunk-WANUX2WZ.js", "/build/_shared/chunk-X3LKQEZF.js", "/build/_shared/chunk-JEL3XKU5.js", "/build/_shared/chunk-LZY6ZCCX.js", "/build/_shared/chunk-6FSDAZCT.js", "/build/_shared/chunk-KDYGWEJ6.js", "/build/_shared/chunk-B43JI2TA.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/wallet": { id: "routes/wallet", parentId: "root", path: "wallet", index: void 0, caseSensitive: void 0, module: "/build/routes/wallet-6YMM534A.js", imports: ["/build/_shared/chunk-CCHL4YUT.js", "/build/_shared/chunk-7MPDYXDX.js", "/build/_shared/chunk-X3LKQEZF.js", "/build/_shared/chunk-JEL3XKU5.js", "/build/_shared/chunk-LZY6ZCCX.js", "/build/_shared/chunk-6FSDAZCT.js", "/build/_shared/chunk-KDYGWEJ6.js", "/build/_shared/chunk-B43JI2TA.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "e439d676", hmr: { runtime: "/build/_shared/chunk-TIJ4GCZ6.js", timestamp: 1742832385019 }, url: "/build/manifest-E439D676.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !0, v3_relativeSplatPath: !0, v3_throwAbortReason: !0, v3_routeConfig: !1, v3_singleFetch: !0, v3_lazyRouteDiscovery: !0, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/orcamentos": {
    id: "routes/orcamentos",
    parentId: "root",
    path: "orcamentos",
    index: void 0,
    caseSensitive: void 0,
    module: orcamentos_exports
  },
  "routes/analytics": {
    id: "routes/analytics",
    parentId: "root",
    path: "analytics",
    index: void 0,
    caseSensitive: void 0,
    module: analytics_exports
  },
  "routes/carteiras": {
    id: "routes/carteiras",
    parentId: "root",
    path: "carteiras",
    index: void 0,
    caseSensitive: void 0,
    module: carteiras_exports
  },
  "routes/dashboard": {
    id: "routes/dashboard",
    parentId: "root",
    path: "dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_exports
  },
  "routes/despesas": {
    id: "routes/despesas",
    parentId: "root",
    path: "despesas",
    index: void 0,
    caseSensitive: void 0,
    module: despesas_exports
  },
  "routes/expenses": {
    id: "routes/expenses",
    parentId: "root",
    path: "expenses",
    index: void 0,
    caseSensitive: void 0,
    module: expenses_exports
  },
  "routes/receitas": {
    id: "routes/receitas",
    parentId: "root",
    path: "receitas",
    index: void 0,
    caseSensitive: void 0,
    module: receitas_exports
  },
  "routes/analise": {
    id: "routes/analise",
    parentId: "root",
    path: "analise",
    index: void 0,
    caseSensitive: void 0,
    module: analise_exports
  },
  "routes/profile": {
    id: "routes/profile",
    parentId: "root",
    path: "profile",
    index: void 0,
    caseSensitive: void 0,
    module: profile_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/budget": {
    id: "routes/budget",
    parentId: "root",
    path: "budget",
    index: void 0,
    caseSensitive: void 0,
    module: budget_exports
  },
  "routes/income": {
    id: "routes/income",
    parentId: "root",
    path: "income",
    index: void 0,
    caseSensitive: void 0,
    module: income_exports
  },
  "routes/wallet": {
    id: "routes/wallet",
    parentId: "root",
    path: "wallet",
    index: void 0,
    caseSensitive: void 0,
    module: wallet_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
