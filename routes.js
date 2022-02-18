const routeJSON = (isAuthenticated, isTenant) => [
  /*
    ---------------------------------------------------------
    Default Pages
    ---------------------------------------------------------
  */
  {
    type: "route",
    default: true,
    routes: [
      {
        type: "application",
        name: "@onx/default-pages",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          variant: "404",
          route: "@onx/default-pages",
        },
      },
    ],
  },
  {
    type: "route",
    default: false,
    path: "/tenant",
    routes: [
      {
        type: "application",
        name: "@onx/default-pages",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          variant: "tenant",
          route: "@onx/default-pages",
        },
      },
    ],
  },
  {
    type: "route",
    default: false,
    path: "/server-error",
    routes: [
      {
        type: "application",
        name: "@onx/default-pages",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          variant: "500",
          route: "@onx/default-pages",
        },
      },
    ],
  },
  {
    type: "route",
    default: false,
    path: "/no-tenant",
    routes: [
      {
        type: "application",
        name: "@onx/default-pages",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          variant: "tenant",
          route: "@onx/default-pages",
        },
      },
    ],
  },
  {
    type: "route",
    default: false,
    path: "/maintenance",
    routes: [
      {
        type: "application",
        name: "@onx/default-pages",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          variant: "maintenance",
          route: "@onx/default-pages",
        },
      },
    ],
  },
  {
    type: "route",
    default: false,
    path: "/lost-connection",
    routes: [
      {
        type: "application",
        name: "@onx/default-pages",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          variant: "offline",
          route: "@onx/default-pages",
        },
      },
    ],
  },
  {
    type: "route",
    default: false,
    path: "/login",
    routes: [
      {
        type: "application",
        name: "@onx/login",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/login",
        },
      },
    ],
  },
  {
    type: "route",
    default: false,
    path: "/forgot",
    routes: [
      {
        type: "application",
        name: "@onx/forgot-password",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/forgot-password",
        },
      },
    ],
  },
  {
    type: "route",
    default: false,
    path: "/aux",
    routes: [
      {
        type: "application",
        name: "@onx/auks-form-login",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/auks-form-login",
        },
      },
    ],
  },
  /*
    ---------------------------------------------------------
    Service Pages
    ---------------------------------------------------------
  */
  {
    type: "route",
    default: false,
    path: "/dashboard-agent",
    routes: [
      {
        type: "application",
        name: "@onx/dashboard",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/dashboard",
        },
      },
    ],
  },
  {
    type: "route",
    default: false,
    path: "/customers",
    routes: [
      {
        type: "application",
        name: "@onx/customer",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/customer",
        },
      },
    ],
  },
  {
    type: "route",
    default: false,
    path: "/interaction",
    routes: [
      {
        type: "application",
        name: "@onx/service",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/service",
        },
      },
    ],
  },
  {
    type: "route",
    default: false,
    path: "/ticketing",
    routes: [
      {
        type: "application",
        name: "@onx/ticketing",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/ticketing",
        },
      },
    ],
  },
  {
    type: "route",
    default: false,
    path: "/log-interactions",
    routes: [
      {
        type: "application",
        name: "@onx/log",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/log",
        },
      },
    ],
  },
  {
    type: "route",
    default: false,
    path: "/log-ticket",
    routes: [
      {
        type: "application",
        name: "@onx/log-ticket",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/log-ticket",
        },
      },
    ],
  },
  {
    type: "route",
    default: false,
    path: "/outbound",
    routes: [
      {
        type: "application",
        name: "@onx/outbound",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/outbound",
        },
      },
    ],
  },
  /*
    ---------------------------------------------------------
    Admin Dashboard
    ---------------------------------------------------------
  */
  {
    type: "route",
    default: false,
    path: "dashboard-admin",
    routes: [
      {
        type: "application",
        name: "@onx/admin-dashboard",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/admin-dashboard",
        },
      },
    ],
  },
  // ======== ADMIN Service ========
  {
    type: "route",
    default: false,
    path: "service/information",
    routes: [
      {
        type: "application",
        name: "@onx/admin-service",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/admin-service-information",
        },
      },
    ],
  },
  {
    type: "route",
    default: false,
    path: "service/ticket-notification",
    routes: [
      {
        type: "application",
        name: "@onx/admin-service",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/admin-service-ticket-notification",
        },
      },
    ],
  },
  {
    type: "route",
    default: false,
    path: "service/aux",
    routes: [
      {
        type: "application",
        name: "@onx/admin-service",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/admin-service-aux",
        },
      },
    ],
  },
  {
    type: "route",
    default: false,
    path: "service/custome-report",
    routes: [
      {
        type: "application",
        name: "@onx/admin-service",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/admin-service-custome-report",
        },
      },
    ],
  },
  {
    type: "route",
    default: false,
    path: "service/custome-field",
    routes: [
      {
        type: "application",
        name: "@onx/admin-service",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/admin-service-custome-field",
        },
      },
    ],
  },
  {
    type: "route",
    default: false,
    path: "service/category",
    routes: [
      {
        type: "application",
        name: "@onx/admin-service",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/admin-service-category",
        },
      },
    ],
  },
  {
    type: "route",
    default: false,
    path: "service/subcategory",
    routes: [
      {
        type: "application",
        name: "@onx/admin-service",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/admin-service-subcategory",
        },
      },
    ],
  },
  {
    type: "route",
    default: false,
    path: "service/template-message",
    routes: [
      {
        type: "application",
        name: "@onx/admin-service",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/admin-service-template-message",
        },
      },
    ],
  },
  {
    type: "route",
    default: false,
    path: "service/group-skill",
    routes: [
      {
        type: "application",
        name: "@onx/admin-service",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/admin-service-group-skill",
        },
      },
    ],
  },
  {
    type: "route",
    default: false,
    path: "service/filter-rule",
    routes: [
      {
        type: "application",
        name: "@onx/admin-service",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/admin-service-filter-rule",
        },
      },
    ],
  },
  {
    type: "route",
    default: false,
    path: "service/parking-interaction",
    routes: [
      {
        type: "application",
        name: "@onx/admin-service",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/admin-service-parking-interaction",
        },
      },
    ],
  },
  {
    type: "route",
    default: false,
    path: "service/threshold",
    routes: [
      {
        type: "application",
        name: "@onx/admin-service",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/admin-service-threshold",
        },
      },
    ],
  },
  {
    type: "route",
    default: false,
    path: "service/ticket-status-next",
    routes: [
      {
        type: "application",
        name: "@onx/admin-service",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/admin-service-ticket",
        },
      },
    ],
  },
  {
    type: "route",
    default: false,
    path: "service/user",
    routes: [
      {
        type: "application",
        name: "@onx/admin-service",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/admin-service-user",
        },
      },
    ],
  },
  {
    type: "route",
    default: false,
    path: "service/group",
    routes: [
      {
        type: "application",
        name: "@onx/admin-service",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/admin-service-group",
        },
      },
    ],
  },
  {
    type: "route",
    default: false,
    path: "service/ticket-notification",
    routes: [
      {
        type: "application",
        name: "@onx/admin-service",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/admin-service-ticket-notification",
        },
      },
    ],
  },
  {
    type: "route",
    default: false,
    path: "service/group-detail",
    routes: [
      {
        type: "application",
        name: "@onx/admin-service",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/admin-service-group-detail",
        },
      },
    ],
  },
  {
    type: "route",
    default: false,
    path: "service/skill-setting",
    routes: [
      {
        type: "application",
        name: "@onx/admin-service",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/admin-service-skill-setting",
        },
      },
    ],
  },
  {
    type: "route",
    default: false,
    path: "service/unit",
    routes: [
      {
        type: "application",
        name: "@onx/admin-service",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/admin-service-unit",
        },
      },
    ],
  },
  {
    type: "route",
    default: false,
    path: "service/whitelist",
    routes: [
      {
        type: "application",
        name: "@onx/admin-service",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/admin-service-whitelist",
        },
      },
    ],
  },
  {
    type: "route",
    default: false,
    path: "service/ticket-status",
    routes: [
      {
        type: "application",
        name: "@onx/admin-service",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/admin-service-status",
        },
      },
    ],
  },
  {
    type: "route",
    default: false,
    path: "service/ticket-priority",
    routes: [
      {
        type: "application",
        name: "@onx/admin-service",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/admin-service-status-level",
        },
      },
    ],
  },
  {
    type: "route",
    default: false,
    path: "service/status-next",
    routes: [
      {
        type: "application",
        name: "@onx/admin-service",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/admin-service-status-next",
        },
      },
    ],
  },
  {
    type: "route",
    default: false,
    path: "service/setting-account",
    routes: [
      {
        type: "application",
        name: "@onx/admin-service",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/admin-service-setting-account",
        },
      },
    ],
  },
  //default
  {
    type: "route",
    default: false,
    path: "service",
    routes: [
      {
        type: "application",
        name: "@onx/admin-service",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/admin-service-aux",
        },
      },
    ],
  },
  // ======== ADMIN Report ========
  //Service====
  {
    type: "route",
    default: false,
    path: "report/service-ticket",
    routes: [
      {
        type: "application",
        name: "@onx/admin-report",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/service-report-ticket",
        },
      },
    ],
  },
  {
    type: "route",
    default: false,
    path: "report/service-interaction",
    routes: [
      {
        type: "application",
        name: "@onx/admin-report",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/service-report-interaction",
        },
      },
    ],
  },
  {
    type: "route",
    default: false,
    path: "report/service-detail-interaction",
    routes: [
      {
        type: "application",
        name: "@onx/admin-report",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/service-report-detail-interaction",
        },
      },
    ],
  },
  //sales====
  {
    type: "route",
    default: false,
    path: "report/sales-call-log",
    routes: [
      {
        type: "application",
        name: "@onx/admin-report",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/sales-report-call-log",
        },
      },
    ],
  },
  {
    type: "route",
    default: false,
    path: "report/sales-summary",
    routes: [
      {
        type: "application",
        name: "@onx/admin-report",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/sales-report-summary",
        },
      },
    ],
  },
  {
    type: "route",
    default: false,
    path: "report/sales-summary-sub-reason",
    routes: [
      {
        type: "application",
        name: "@onx/admin-report",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/sales-report-summary-sub-reason",
        },
      },
    ],
  },
  //marketer====
  {
    type: "route",
    default: false,
    path: "report/marketer-transaction",
    routes: [
      {
        type: "application",
        name: "@onx/admin-report",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/marketer-report-transaction",
        },
      },
    ],
  },
  //default
  {
    type: "route",
    default: false,
    path: "report",
    routes: [
      {
        type: "application",
        name: "@onx/admin-report",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/service-report-ticket",
        },
      },
    ],
  },
  // ======== ADMIN Sales ========x
  {
    type: "route",
    default: false,
    path: "sales/campaign",
    routes: [
      {
        type: "application",
        name: "@onx/admin-sales",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/admin-sales-campaign",
        },
      },
    ],
  },
  {
    type: "route",
    default: false,
    path: "sales/list-call",
    routes: [
      {
        type: "application",
        name: "@onx/admin-sales",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/admin-sales-list-call",
        },
      },
    ],
  },
  {
    type: "route",
    default: false,
    path: "sales/product",
    routes: [
      {
        type: "application",
        name: "@onx/admin-sales",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/admin-sales-product",
        },
      },
    ],
  },
  {
    type: "route",
    default: false,
    path: "sales/upload-data",
    routes: [
      {
        type: "application",
        name: "@onx/admin-sales",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/admin-sales-upload-data",
        },
      },
    ],
  },
  {
    type: "route",
    default: false,
    path: "sales/distribusi-data",
    routes: [
      {
        type: "application",
        name: "@onx/admin-sales",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/admin-sales-distribusi-data",
        },
      },
    ],
  },
  {
    type: "route",
    default: false,
    path: "sales/recontest-data",
    routes: [
      {
        type: "application",
        name: "@onx/admin-sales",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/admin-sales-recontest-data",
        },
      },
    ],
  },
  {
    type: "route",
    default: false,
    path: "sales/status-call",
    routes: [
      {
        type: "application",
        name: "@onx/admin-sales",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/admin-sales-status-call",
        },
      },
    ],
  },
  {
    type: "route",
    default: false,
    path: "sales/reason-call",
    routes: [
      {
        type: "application",
        name: "@onx/admin-sales",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/admin-sales-reason-call",
        },
      },
    ],
  },
  {
    type: "route",
    default: false,
    path: "sales/subreason-call",
    routes: [
      {
        type: "application",
        name: "@onx/admin-sales",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/admin-sales-subreason-call",
        },
      },
    ],
  },
  {
    type: "route",
    default: false,
    path: "sales",
    routes: [
      {
        type: "application",
        name: "@onx/admin-sales",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/admin-sales-product",
        },
      },
    ],
  },
  // ======== ADMIN Marketers ========

  {
    type: "route",
    default: false,
    path: "marketer/dashboard",
    routes: [
      {
        type: "application",
        name: "@onx/marketers",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/marketers-dashboard",
        },
      },
    ],
  },
  {
    type: "route",
    default: false,
    path: "marketer/product",
    routes: [
      {
        type: "application",
        name: "@onx/marketers",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/marketers-product",
        },
      },
    ],
  },
  {
    type: "route",
    default: false,
    path: "marketer/template-email",
    routes: [
      {
        type: "application",
        name: "@onx/marketers",
        props: {
          channel_id: 2,
          channel_name: "email",
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/marketers-template",
        },
      },
    ],
  },
  {
    type: "route",
    default: false,
    path: "marketer/add-template-email",
    routes: [
      {
        type: "application",
        name: "@onx/marketers",
        props: {
          channel_id: 2,
          channel_name: "email",
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/marketers-form-email",
        },
      },
    ],
  },
  {
    type: "route",
    default: false,
    path: "marketer/template-whatsapp",
    routes: [
      {
        type: "application",
        name: "@onx/marketers",
        props: {
          channel_id: 12,
          channel_name: "whatsapp",
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/marketers-template",
        },
      },
    ],
  },
  {
    type: "route",
    default: false,
    path: "marketer/add-template-whatsapp",
    routes: [
      {
        type: "application",
        name: "@onx/marketers",
        props: {
          channel_id: 12,
          channel_name: "whatsapp",
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/marketers-form-nonhtml",
        },
      },
    ],
  },
  {
    type: "route",
    default: false,
    path: "marketer/template-sms",
    routes: [
      {
        type: "application",
        name: "@onx/marketers",
        props: {
          channel_id: 4,
          channel_name: "sms",
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/marketers-template",
        },
      },
    ],
  },
  {
    type: "route",
    default: false,
    path: "marketer/add-template-sms",
    routes: [
      {
        type: "application",
        name: "@onx/marketers",
        props: {
          channel_id: 4,
          channel_name: "sms",
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/marketers-form-nonhtml",
        },
      },
    ],
  },
  {
    type: "route",
    default: false,
    path: "marketer/campaign",
    routes: [
      {
        type: "application",
        name: "@onx/marketers",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/marketers-campaign",
        },
      },
    ],
  },
  {
    type: "route",
    default: false,
    path: "marketer/create-campaign",
    routes: [
      {
        type: "application",
        name: "@onx/marketers",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/marketers-form-campaign",
        },
      },
    ],
  },
  {
    type: "route",
    default: false,
    path: "marketer/campaign-detail",
    routes: [
      {
        type: "application",
        name: "@onx/marketers",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/marketer-campaign-detail",
        },
      },
    ],
  },
  {
    type: "route",
    default: false,
    path: "marketer",
    routes: [
      {
        type: "application",
        name: "@onx/marketers",
        props: {
          isAuthenticated: isAuthenticated,
          isTenant: isTenant,
          route: "@onx/marketers-product",
        },
      },
    ],
  },
];
