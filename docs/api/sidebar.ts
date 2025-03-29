import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/simply-plural-api",
    },
    {
      type: "category",
      label: "Analytics",
      link: {
        type: "doc",
        id: "api/analytics",
      },
      items: [
        {
          type: "doc",
          id: "api/get-analytics",
          label: "Get analytics",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Automated Timers",
      link: {
        type: "doc",
        id: "api/automated-timers",
      },
      items: [
        {
          type: "doc",
          id: "api/get-automated-timer",
          label: "Get automated timer",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/add-automated-timer",
          label: "Add automated timer",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/update-automated-timer",
          label: "Update automated timer",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/add-automated-timer-by-id",
          label: "Add automated timer by Id",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/update-automated-timer-by-id",
          label: "Update automated timer by Id",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/delete-automated-timer",
          label: "Delete automated timer",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/get-all-automated-timers",
          label: "Get all automated timers",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Board Messages",
      link: {
        type: "doc",
        id: "api/board-messages",
      },
      items: [
        {
          type: "doc",
          id: "api/get-specific-board-message",
          label: "Get specific board message",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/write-board-message",
          label: "Write board message",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/update-board-message",
          label: "Update board message",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/delete-board-message",
          label: "Delete board message",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/get-all-board-messages-for-member",
          label: "Get all board messages for member",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-unread-board-messages",
          label: "Get unread board messages",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Chat Messages",
      link: {
        type: "doc",
        id: "api/chat",
      },
      items: [
        {
          type: "doc",
          id: "api/get-message",
          label: "Get message",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/add-message",
          label: "Add message",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/update-message",
          label: "Update message",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/delete-message",
          label: "Delete message",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/get-messages",
          label: "Get messages",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Chat Categories",
      link: {
        type: "doc",
        id: "api/chat-categories",
      },
      items: [
        {
          type: "doc",
          id: "api/get-category",
          label: "Get category",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/add-category",
          label: "Add category",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/update-category",
          label: "Update category",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/delete-category",
          label: "Delete category",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/get-chat-categories",
          label: "Get chat categories",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Chat Channels",
      link: {
        type: "doc",
        id: "api/chat-channels",
      },
      items: [
        {
          type: "doc",
          id: "api/get-channel",
          label: "Get channel",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/add-channel",
          label: "Add channel",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/update-channel",
          label: "Update channel",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/delete-channel",
          label: "Delete channel",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/get-chat-channels",
          label: "Get chat channels",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Comments",
      link: {
        type: "doc",
        id: "api/comments",
      },
      items: [
        {
          type: "doc",
          id: "api/get-comments",
          label: "Get comments",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/add-comment",
          label: "Add comment",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/update-comment",
          label: "Update comment",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/delete-comment",
          label: "Delete comment",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/get-specific-comment",
          label: "Get specific comment",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Custom Fronts",
      link: {
        type: "doc",
        id: "api/custom-fronts",
      },
      items: [
        {
          type: "doc",
          id: "api/get-custom-front",
          label: "Get custom front",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/add-custom-front",
          label: "Add custom front",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/update-custom-front",
          label: "Update custom front",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/delete-custom-front",
          label: "Delete custom front",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/get-all-custom-fronts",
          label: "Get all custom fronts",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Friends",
      link: {
        type: "doc",
        id: "api/friends",
      },
      items: [
        {
          type: "doc",
          id: "api/get-friends",
          label: "Get friends",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-received-friend-requests",
          label: "Get received friend requests",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-sent-friend-requests",
          label: "Get sent friend requests",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-current-fronters-of-system-text-format",
          label: "Get current fronters of system (text-format)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/add-friend",
          label: "Add friend",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/respond-to-friend-request",
          label: "Respond to friend request",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/delete-friend-request",
          label: "Delete friend request",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/remove-friend",
          label: "Remove friend",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/update-friend-settings",
          label: "Update friend settings",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/get-friend-settings",
          label: "Get friend settings",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/update-friend-settings",
          label: "Update friend settings",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-current-fronters-of-system",
          label: "Get current fronters of system",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Front History",
      link: {
        type: "doc",
        id: "api/front-history",
      },
      items: [
        {
          type: "doc",
          id: "api/get-current-fronters-self",
          label: "Get current fronters (self)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-front-history",
          label: "Get front history",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-front-history-from-member",
          label: "Get front history from member",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-specific-front-history-entry",
          label: "Get specific front history entry",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/add-front-history-entry",
          label: "Add front history entry",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/update-front-history-entry",
          label: "Update front history entry",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/delete-front-history-entry",
          label: "Delete front history entry",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Groups",
      link: {
        type: "doc",
        id: "api/groups",
      },
      items: [
        {
          type: "doc",
          id: "api/get-group",
          label: "Get group",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/add-group",
          label: "Add group",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/update-group",
          label: "Update group",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/delete-group",
          label: "Delete group",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/get-all-groups",
          label: "Get all groups",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Members",
      link: {
        type: "doc",
        id: "api/members",
      },
      items: [
        {
          type: "doc",
          id: "api/get-member",
          label: "Get Member",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/add-member",
          label: "Add member",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/update-member",
          label: "Update member",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/delete-member",
          label: "Delete member",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/get-all-members",
          label: "Get all members",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Notes",
      link: {
        type: "doc",
        id: "api/notes",
      },
      items: [
        {
          type: "doc",
          id: "api/get-note",
          label: "Get note",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/add-note",
          label: "Add note",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/update-note",
          label: "Update note",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/delete-note",
          label: "Delete note",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/get-all-notes",
          label: "Get all notes",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Polls",
      link: {
        type: "doc",
        id: "api/polls",
      },
      items: [
        {
          type: "doc",
          id: "api/get-poll",
          label: "Get poll",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/add-poll",
          label: "Add poll",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/update-poll",
          label: "Update poll",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/delete-poll",
          label: "Delete poll",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/get-all-polls",
          label: "Get all polls",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "PluralKit",
      link: {
        type: "doc",
        id: "api/plural-kit",
      },
      items: [
        {
          type: "doc",
          id: "api/sync-member-to-or-from-pluralkit",
          label: "Sync member to or from pluralkit",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/sync-members-to-or-from-pluralkit",
          label: "Sync members to or from pluralkit",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Repeated Timers",
      link: {
        type: "doc",
        id: "api/repeated-timers",
      },
      items: [
        {
          type: "doc",
          id: "api/get-repeated-timer",
          label: "Get repeated timer",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/add-repeated-timer",
          label: "Add repeated timer",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/update-repeated-timer",
          label: "Update repeated timer",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/delete-repeated-timer",
          label: "Delete repeated timer",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/get-all-repeated-timers",
          label: "Get all repeated timers",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Users",
      items: [
        {
          type: "doc",
          id: "api/get-your-authed-user-id",
          label: "Get your authed user Id",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-user",
          label: "Get user",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/update-user",
          label: "Update user",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/set-username",
          label: "Set username",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/generate-report",
          label: "Generate report",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-all-reports",
          label: "Get all reports",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/delete-report",
          label: "Delete report",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
