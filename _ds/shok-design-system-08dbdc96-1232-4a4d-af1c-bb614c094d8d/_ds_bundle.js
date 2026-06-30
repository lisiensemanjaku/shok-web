/* @ds-bundle: {"format":3,"namespace":"ShokDesignSystem_08dbdc","components":[],"sourceHashes":{"ui_kits/ios_app/AccountScreen.jsx":"23a2820bb52b","ui_kits/ios_app/Components.jsx":"3542ca892084","ui_kits/ios_app/FeedScreen.jsx":"d5193c62c9fb","ui_kits/ios_app/MessagesScreen.jsx":"35e530750ce7","ui_kits/ios_app/NotificationsScreen.jsx":"78adb554aed1","ui_kits/ios_app/OnboardingScreen.jsx":"6e4697727f80","ui_kits/ios_app/PostScreen.jsx":"478be311f0a6"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ShokDesignSystem_08dbdc = window.ShokDesignSystem_08dbdc || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/ios_app/AccountScreen.jsx
try { (() => {
// AccountScreen.jsx — Account tab + sub-screens (edit profile, notifications settings, blocked users)

const AccountScreen = ({
  onTab
}) => {
  const {
    T,
    Icon,
    NavBar,
    StatusBar,
    TabBar,
    Avatar,
    Divider
  } = window;
  const [screen, setScreen] = React.useState('account'); // account | edit | notifs | blocked
  const [account, setAccount] = React.useState(MOCK_ACCOUNT);
  const [showLogout, setShowLogout] = React.useState(false);
  const SettingsRow = ({
    iconNode,
    label,
    color = T.text2,
    onPress,
    chevron = true
  }) => /*#__PURE__*/React.createElement("button", {
    onClick: onPress,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      width: '100%',
      padding: '13px 0',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      display: 'flex',
      justifyContent: 'center'
    }
  }, iconNode), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.font,
      fontSize: 17,
      color,
      flex: 1
    }
  }, label), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: T.text5,
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "9 18 15 12 9 6"
  })));

  // Notification settings sub-screen
  if (screen === 'notifs') {
    const notifTypes = ['New Content', 'New Bid', 'New Comment', 'New Reply', 'Bid Accepted', 'Bid Cancelled', 'Credits Received', 'Referral Reward', 'New Message'];
    const [toggles, setToggles] = React.useState(Object.fromEntries(notifTypes.map(k => [k, true])));
    return /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        background: T.appBg,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement(NavBar, {
      title: "Notifications",
      onLeft: () => setScreen('account'),
      leftIcon: "chevronLeft"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: 'auto',
        padding: '16px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: T.cardBg,
        borderRadius: 16,
        padding: '0 16px'
      }
    }, notifTypes.map((type, i) => /*#__PURE__*/React.createElement(React.Fragment, {
      key: type
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '13px 0'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: T.font,
        fontSize: 16,
        color: T.text1
      }
    }, type), /*#__PURE__*/React.createElement("div", {
      onClick: () => setToggles(t => ({
        ...t,
        [type]: !t[type]
      })),
      style: {
        width: 48,
        height: 28,
        borderRadius: 100,
        background: toggles[type] ? T.green : T.elevated,
        cursor: 'pointer',
        position: 'relative',
        transition: 'background 0.2s'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 3,
        left: toggles[type] ? 23 : 3,
        width: 22,
        height: 22,
        borderRadius: '50%',
        background: '#fff',
        transition: 'left 0.2s',
        boxShadow: '0 1px 4px rgba(0,0,0,0.3)'
      }
    }))), i < notifTypes.length - 1 && /*#__PURE__*/React.createElement("div", {
      style: {
        height: 1,
        background: T.border
      }
    }))))), /*#__PURE__*/React.createElement(TabBar, {
      active: "account",
      onTab: onTab
    }));
  }

  // Blocked users sub-screen
  if (screen === 'blocked') {
    const blocked = [{
      name: 'John D',
      initials: 'JD',
      username: 'johnd',
      since: '2d ago'
    }];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        background: T.appBg,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement(NavBar, {
      title: "Blocked Users",
      onLeft: () => setScreen('account'),
      leftIcon: "chevronLeft"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: 'auto',
        padding: '16px'
      }
    }, blocked.length === 0 ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '48px 24px',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 40
      }
    }, "\uD83D\uDEAB"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: T.font,
        fontSize: 18,
        fontWeight: 600,
        color: T.text1
      }
    }, "No Blocked Users"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: T.font,
        fontSize: 15,
        color: T.text4,
        textAlign: 'center'
      }
    }, "You haven't blocked anyone yet.")) : /*#__PURE__*/React.createElement("div", {
      style: {
        background: T.cardBg,
        borderRadius: 16,
        padding: '0 16px'
      }
    }, blocked.map((u, i) => /*#__PURE__*/React.createElement("div", {
      key: u.username,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '12px 0',
        borderBottom: i < blocked.length - 1 ? `1px solid ${T.border}` : 'none'
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      initials: u.initials,
      size: 44,
      radius: 22
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: T.font,
        fontSize: 16,
        fontWeight: 600,
        color: T.text1
      }
    }, u.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: T.font,
        fontSize: 13,
        color: T.text4
      }
    }, "@", u.username)), /*#__PURE__*/React.createElement("button", {
      style: {
        background: T.elevated,
        border: 'none',
        borderRadius: 100,
        padding: '6px 16px',
        fontFamily: T.font,
        fontSize: 14,
        color: T.text1,
        cursor: 'pointer'
      }
    }, "Unblock"))))), /*#__PURE__*/React.createElement(TabBar, {
      active: "account",
      onTab: onTab
    }));
  }

  // Edit profile sub-screen
  if (screen === 'edit') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        background: T.appBg,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement(NavBar, {
      title: "Edit profile",
      onLeft: () => setScreen('account'),
      leftIcon: "chevronLeft",
      rightItems: [{
        node: /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: T.font,
            fontSize: 16,
            color: T.blue,
            fontWeight: 600
          }
        }, "Save"),
        action: () => setScreen('account')
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: 'auto',
        padding: '16px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 24
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      initials: account.initials,
      size: 80,
      radius: 40
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        background: T.green,
        width: 26,
        height: 26,
        borderRadius: 13,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "13",
      height: "13",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#000",
      strokeWidth: "2.5"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"
    })))), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: T.font,
        fontSize: 14,
        color: T.blue,
        marginTop: 8,
        cursor: 'pointer'
      }
    }, "Edit picture")), [['First name', account.name], ['Last name', 'Silverhand'], ['Username', '@' + account.username], ['Bio', account.bio], ['Phone', '+49 157 1122 2333']].map(([label, val], i) => /*#__PURE__*/React.createElement("div", {
      key: label,
      style: {
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: T.font,
        fontSize: 12,
        color: T.text4,
        marginBottom: 5,
        textTransform: 'uppercase',
        letterSpacing: '0.05em'
      }
    }, label), /*#__PURE__*/React.createElement("input", {
      defaultValue: val,
      readOnly: label === 'Username',
      style: {
        width: '100%',
        background: T.cardBg,
        border: 'none',
        borderRadius: 10,
        padding: '12px 16px',
        fontFamily: T.font,
        fontSize: 16,
        color: label === 'Username' ? T.text4 : T.text1,
        outline: 'none'
      }
    }), label === 'Username' && /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: T.font,
        fontSize: 12,
        color: T.text4,
        marginTop: 4,
        paddingLeft: 4
      }
    }, "Username cannot be changed.")))), /*#__PURE__*/React.createElement(TabBar, {
      active: "account",
      onTab: onTab
    }));
  }

  // Main account screen
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: T.appBg,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 20px 10px',
      borderBottom: `1px solid ${T.border}`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.font,
      fontSize: 20,
      fontWeight: 700,
      color: T.text1
    }
  }, "Account")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '16px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: T.cardBg,
      borderRadius: 16,
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center',
      paddingBottom: 14,
      borderBottom: `1px solid ${T.border}`,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: account.initials,
    size: 60,
    radius: 30
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.font,
      fontSize: 19,
      fontWeight: 700,
      color: T.text1
    }
  }, account.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.font,
      fontSize: 15,
      color: T.text4
    }
  }, "@", account.username))), [[/*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: T.green,
    strokeWidth: "1.8"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  })), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: T.green,
      fontWeight: 600
    }
  }, "Total credits: ", account.totalCredits), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: T.green,
      fontSize: 14
    }
  }, "Committed credits: ", account.committedCredits))], [/*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: T.text2,
    strokeWidth: "1.8"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
  })), `Offers completed: ${account.offersCompleted}`], [/*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: T.text2,
    strokeWidth: "1.8"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "12 6 12 12 16 14"
  })), `Member since: ${account.memberSince}`], [/*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: T.text2,
    strokeWidth: "1.8"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "7",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M23 21v-2a4 4 0 00-3-3.87"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 3.13a4 4 0 010 7.75"
  })), `Referral code: ${account.referralCode}`]].map(([icon, text], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '10px 0',
      borderBottom: i < 3 ? `1px solid ${T.border}` : 'none'
    }
  }, icon, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.font,
      fontSize: 15,
      color: T.text1
    }
  }, text))), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 14,
      borderTop: `1px solid ${T.border}`,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setScreen('edit'),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: T.blue,
    strokeWidth: "1.8"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.font,
      fontSize: 16,
      color: T.blue,
      fontWeight: 500
    }
  }, "Edit profile")))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: T.cardBg,
      borderRadius: 16,
      padding: '0 16px'
    }
  }, /*#__PURE__*/React.createElement(SettingsRow, {
    label: "Provide feedback",
    onPress: () => {},
    iconNode: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: T.text2,
      strokeWidth: "1.8"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "14 2 14 8 20 8"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "16",
      y1: "13",
      x2: "8",
      y2: "13"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "16",
      y1: "17",
      x2: "8",
      y2: "17"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "10 9 9 9 8 9"
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: T.border
    }
  }), /*#__PURE__*/React.createElement(SettingsRow, {
    label: "Notifications",
    onPress: () => setScreen('notifs'),
    iconNode: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: T.text2
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: T.border
    }
  }), /*#__PURE__*/React.createElement(SettingsRow, {
    label: "Blocked Users",
    onPress: () => setScreen('blocked'),
    iconNode: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: T.text2,
      strokeWidth: "1.8"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "7",
      r: "4"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "23",
      y1: "18",
      x2: "17",
      y2: "18"
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: T.border
    }
  }), /*#__PURE__*/React.createElement(SettingsRow, {
    label: "Log out",
    onPress: () => setShowLogout(true),
    chevron: false,
    iconNode: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: T.text2,
      strokeWidth: "1.8"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "16 17 21 12 16 7"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "21",
      y1: "12",
      x2: "9",
      y2: "12"
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: T.border
    }
  }), /*#__PURE__*/React.createElement(SettingsRow, {
    label: "Delete account",
    onPress: () => {},
    chevron: false,
    color: T.red,
    iconNode: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: T.red,
      strokeWidth: "1.8"
    }, /*#__PURE__*/React.createElement("polyline", {
      points: "3 6 5 6 21 6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a1 1 0 011-1h4a1 1 0 011 1v2"
    }))
  }))), showLogout && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(0,0,0,0.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100,
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: T.elevated,
      borderRadius: 16,
      padding: 24,
      width: '100%',
      maxWidth: 300
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.font,
      fontSize: 17,
      fontWeight: 700,
      color: T.text1,
      marginBottom: 8,
      textAlign: 'center'
    }
  }, "Log out?"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.font,
      fontSize: 14,
      color: T.text3,
      marginBottom: 20,
      textAlign: 'center'
    }
  }, "Are you sure you want to log out?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowLogout(false),
    style: {
      flex: 1,
      background: T.cardBg,
      border: 'none',
      borderRadius: 10,
      padding: '12px 0',
      fontFamily: T.font,
      fontSize: 15,
      color: T.text1,
      cursor: 'pointer'
    }
  }, "Cancel"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowLogout(false),
    style: {
      flex: 1,
      background: T.red,
      border: 'none',
      borderRadius: 10,
      padding: '12px 0',
      fontFamily: T.font,
      fontSize: 15,
      color: '#fff',
      fontWeight: 600,
      cursor: 'pointer'
    }
  }, "Log out")))), /*#__PURE__*/React.createElement(TabBar, {
    active: "account",
    onTab: onTab
  }));
};
Object.assign(window, {
  AccountScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ios_app/AccountScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ios_app/Components.jsx
try { (() => {
// Components.jsx — Shok iOS App UI Kit
// Shared data, primitives, and layout components
// Exports everything to window for use by other scripts

// ─── MOCK DATA ─────────────────────────────────────────────────────────────

const MOCK_POSTS = [{
  id: '1',
  author: {
    name: 'Aleksida S',
    username: 'aleksida_s',
    initials: 'AS'
  },
  credits: 10,
  bids: 2,
  timeAgo: '4d',
  content: 'Need help moving furniture this Saturday — a sofa and a few boxes. Should take about 2 hours.',
  hashtags: [],
  location: 'Bahnhofplatz 9, Bavaria, Germany',
  status: 'open',
  isOwn: false,
  isSaved: false
}, {
  id: '2',
  author: {
    name: 'Johny Silverhand',
    username: 'cyberpunk',
    initials: 'JS'
  },
  credits: 5,
  bids: 1,
  timeAgo: '3d',
  content: 'Merhaba, bu uygulamayı test etmek için yardıma ihtiyacım var.',
  hashtags: [],
  location: 'Ataturk Blvd., Istanbul, Türkiye',
  status: 'open',
  isOwn: false,
  isSaved: true
}, {
  id: '3',
  author: {
    name: 'Maria K',
    username: 'maria_k',
    initials: 'MK'
  },
  credits: 8,
  bids: 0,
  timeAgo: '6d',
  content: 'Can someone pick up groceries near Marienplatz? I\'m recovering from an injury and can\'t get out.',
  hashtags: ['#help', '#groceries'],
  location: 'Marienplatz, Munich, Germany',
  status: 'open',
  isOwn: false,
  isSaved: false
}, {
  id: '4',
  author: {
    name: 'Sara J',
    username: 'sara_j',
    initials: 'SJ'
  },
  credits: 15,
  bids: 3,
  timeAgo: '2d',
  content: 'Looking for guitar tutoring — complete beginner, 1h/week. Happy to pay extra for the right teacher!',
  hashtags: ['#music', '#tutoring'],
  location: 'London, UK',
  status: 'accepted',
  isOwn: false,
  isSaved: false
}, {
  id: '5',
  author: {
    name: 'Johny Silverhand',
    username: 'cyberpunk',
    initials: 'JS'
  },
  credits: 20,
  bids: 0,
  timeAgo: '1d',
  content: 'Need a ride to the airport on Sunday morning, 6am. Munich → MUC Airport. Will pay well!',
  hashtags: ['#ride', '#urgent'],
  location: 'Munich, Germany',
  status: 'open',
  isOwn: true,
  isSaved: false
}];
const MOCK_CONVERSATIONS = [{
  id: 'c1',
  postTitle: 'Moving furniture',
  other: {
    name: 'Aleksida S',
    initials: 'AS',
    username: 'aleksida_s'
  },
  lastMessage: 'That\'s great! It\'s just a sofa and a few boxes.',
  time: '10:45',
  unread: 0,
  archived: false,
  messages: [{
    id: 'm1',
    text: 'Hey! I saw your post about moving furniture. I can help this Saturday!',
    sentByMe: false,
    time: '10:42',
    read: true
  }, {
    id: 'm2',
    text: 'That\'s great! It\'s just a sofa and a few boxes. Should take about 2 hours.',
    sentByMe: true,
    time: '10:45',
    read: true
  }, {
    id: 'm3',
    text: 'Perfect. What time should I come?',
    sentByMe: false,
    time: '10:46',
    read: true
  }, {
    id: 'm4',
    text: '10am works? I\'m at Bahnhofplatz 9.',
    sentByMe: true,
    time: '10:47',
    read: false
  }]
}, {
  id: 'c2',
  postTitle: 'App testing help',
  other: {
    name: 'Maria K',
    initials: 'MK',
    username: 'maria_k'
  },
  lastMessage: 'Thanks for offering to help!',
  time: 'Yesterday',
  unread: 2,
  archived: false,
  messages: [{
    id: 'm1',
    text: 'Hi! I can help test your app.',
    sentByMe: false,
    time: '14:10',
    read: true
  }, {
    id: 'm2',
    text: 'Thanks for offering to help!',
    sentByMe: true,
    time: '14:15',
    read: true
  }, {
    id: 'm3',
    text: 'When would work for you?',
    sentByMe: false,
    time: '14:20',
    read: false
  }, {
    id: 'm4',
    text: 'I could do tomorrow afternoon?',
    sentByMe: false,
    time: '14:21',
    read: false
  }]
}];
const MOCK_NOTIFICATIONS = [{
  id: 'n1',
  type: 'bid',
  title: 'New bid',
  body: 'Maria K offered 8 credits on your post.',
  time: '5 min ago',
  read: false,
  icon: '⊙'
}, {
  id: 'n2',
  type: 'bid_accepted',
  title: 'Bid Accepted',
  body: 'Aleksida S accepted your bid of 10 credits for their post. Don\'t forget to get in touch.',
  time: '1h ago',
  read: false,
  icon: '✓'
}, {
  id: 'n3',
  type: 'comment',
  title: 'New Comment',
  body: 'Johny Silverhand commented on your post: "Still available?"',
  time: '3h ago',
  read: true,
  icon: '💬'
}, {
  id: 'n4',
  type: 'credits',
  title: 'Credits received',
  body: 'Hooray! You\'ve received 10 credits. Check your account for more info.',
  time: '2d ago',
  read: true,
  icon: '⊙'
}, {
  id: 'n5',
  type: 'referral',
  title: 'Referral Reward',
  body: 'Your referral brought in a new friend! Here\'s 10 credits for sharing!',
  time: '5d ago',
  read: true,
  icon: '🎉'
}];
const MOCK_ACCOUNT = {
  name: 'Johny Silverhand',
  username: 'cyberpunk',
  initials: 'JS',
  bio: 'Community helper. Always ready to lend a hand.',
  totalCredits: 100,
  committedCredits: 15,
  offersCompleted: 2,
  memberSince: 'Jun. 2026',
  referralCode: 'EQV4LP'
};

// ─── DESIGN TOKENS ──────────────────────────────────────────────────────────

const T = {
  appBg: '#000000',
  cardBg: 'rgba(45,43,48,0.95)',
  elevated: 'rgba(62,61,65,0.95)',
  green: '#79EDAF',
  greenMuted: 'rgba(121,237,175,0.5)',
  blue: '#75AFEF',
  blueMuted: 'rgba(117,175,239,0.5)',
  red: '#FF6B57',
  redSubtle: 'rgba(255,107,87,0.15)',
  yellow: '#FFCE2F',
  text1: '#FFFFFF',
  text2: 'rgba(255,255,255,0.85)',
  text3: '#C2C2C3',
  text4: '#868586',
  text5: '#5D5D5E',
  disabled: 'rgba(255,255,255,0.35)',
  border: 'rgba(255,255,255,0.12)',
  font: '"Helvetica Neue","DM Sans",-apple-system,sans-serif'
};

// ─── SVG ICONS ──────────────────────────────────────────────────────────────

const Icon = ({
  name,
  size = 22,
  color = T.text2,
  style = {}
}) => {
  const icons = {
    home: /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: color
    }, /*#__PURE__*/React.createElement("path", {
      d: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
    })),
    'home-outline': /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "1.8"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    })),
    send: /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "1.8"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "22",
      y1: "2",
      x2: "11",
      y2: "13"
    }), /*#__PURE__*/React.createElement("polygon", {
      points: "22 2 15 22 11 13 2 9 22 2",
      fill: color
    })),
    plus: /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2.2"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "4"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "8",
      x2: "12",
      y2: "16"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "8",
      y1: "12",
      x2: "16",
      y2: "12"
    })),
    bell: /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: color
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
    })),
    person: /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: color
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"
    })),
    search: /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "11",
      cy: "11",
      r: "8"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "21",
      y1: "21",
      x2: "16.65",
      y2: "16.65"
    })),
    sort: /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "5",
      x2: "12",
      y2: "19"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "5 12 12 5 19 12"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "5 12 12 19 19 12",
      transform: "translate(0,0)"
    })),
    dots: /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: color
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "5",
      cy: "12",
      r: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "19",
      cy: "12",
      r: "2"
    })),
    pin: /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "1.8"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "9",
      r: "2.5"
    })),
    chevronRight: /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2"
    }, /*#__PURE__*/React.createElement("polyline", {
      points: "9 18 15 12 9 6"
    })),
    chevronLeft: /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2"
    }, /*#__PURE__*/React.createElement("polyline", {
      points: "15 18 9 12 15 6"
    })),
    check: /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2.5"
    }, /*#__PURE__*/React.createElement("polyline", {
      points: "20 6 9 17 4 12"
    })),
    xmark: /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "18",
      y1: "6",
      x2: "6",
      y2: "18"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "6",
      y1: "6",
      x2: "18",
      y2: "18"
    })),
    comment: /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "1.8"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
    })),
    bookmark: /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "1.8"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"
    })),
    edit: /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "1.8"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"
    })),
    trash: /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "1.8"
    }, /*#__PURE__*/React.createElement("polyline", {
      points: "3 6 5 6 21 6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a1 1 0 011-1h4a1 1 0 011 1v2"
    })),
    copy: /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "1.8"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "9",
      y: "9",
      width: "13",
      height: "13",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"
    })),
    heart: /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "1.8"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
    })),
    logout: /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "1.8"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "16 17 21 12 16 7"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "21",
      y1: "12",
      x2: "9",
      y2: "12"
    }))
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      ...style
    }
  }, icons[name] || null);
};

// ─── LAYOUT PRIMITIVES ───────────────────────────────────────────────────────

const Divider = () => /*#__PURE__*/React.createElement("div", {
  style: {
    height: 1,
    background: T.border,
    margin: '0 -16px'
  }
});
const Avatar = ({
  initials,
  size = 44,
  radius = 10,
  color = '#3E3D41'
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    width: size,
    height: size,
    borderRadius: radius,
    background: color,
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: T.font,
    fontSize: size * 0.35,
    fontWeight: 600,
    color: T.text3
  }
}, initials);
const Card = ({
  children,
  style = {},
  danger = false
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    background: danger ? T.redSubtle : T.cardBg,
    borderRadius: 16,
    padding: 16,
    ...style
  }
}, children);
const StatusBar = ({
  time = '12:11'
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    height: 50,
    display: 'flex',
    alignItems: 'flex-end',
    paddingBottom: 8,
    paddingLeft: 24,
    paddingRight: 20,
    background: T.appBg
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.font,
    fontSize: 15,
    fontWeight: 600,
    color: T.text1,
    flex: 1
  }
}, time), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: 6,
    alignItems: 'center'
  }
}, /*#__PURE__*/React.createElement("svg", {
  width: "16",
  height: "12",
  viewBox: "0 0 16 12",
  fill: T.text1
}, /*#__PURE__*/React.createElement("rect", {
  x: "0",
  y: "3",
  width: "3",
  height: "9",
  rx: "1"
}), /*#__PURE__*/React.createElement("rect", {
  x: "4.5",
  y: "2",
  width: "3",
  height: "10",
  rx: "1"
}), /*#__PURE__*/React.createElement("rect", {
  x: "9",
  y: "0",
  width: "3",
  height: "12",
  rx: "1"
}), /*#__PURE__*/React.createElement("rect", {
  x: "13.5",
  y: "0",
  width: "2.5",
  height: "12",
  rx: "1",
  opacity: "0.3"
})), /*#__PURE__*/React.createElement("svg", {
  width: "16",
  height: "12",
  viewBox: "0 0 16 12",
  fill: T.text1
}, /*#__PURE__*/React.createElement("path", {
  d: "M8 1.5C11 1.5 13.7 2.8 15.5 4.8L14 6.4C12.6 4.8 10.4 3.8 8 3.8S3.4 4.8 2 6.4L.5 4.8C2.3 2.8 5 1.5 8 1.5zm0 4C9.7 5.5 11.2 6.2 12.3 7.3L10.8 8.9C10.1 8.2 9.1 7.8 8 7.8s-2.1.4-2.8 1.1L3.7 7.3C4.8 6.2 6.3 5.5 8 5.5zm0 4c.8 0 1.5.3 2 .8L8 12.5l-2-2.2c.5-.5 1.2-.8 2-.8z"
})), /*#__PURE__*/React.createElement("div", {
  style: {
    width: 25,
    height: 12,
    border: `1.5px solid ${T.text1}`,
    borderRadius: 3,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    padding: '0 2px'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: '70%',
    height: 7,
    background: T.text1,
    borderRadius: 1
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    width: 2,
    height: 6,
    background: T.text1,
    borderRadius: 1,
    position: 'absolute',
    right: -3
  }
}))));
const NavBar = ({
  title,
  onLeft,
  leftIcon = 'chevronLeft',
  rightItems = [],
  noBorder = false
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '8px 20px 10px',
    background: T.appBg,
    borderBottom: noBorder ? 'none' : `1px solid ${T.border}`
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: 44,
    display: 'flex',
    justifyContent: 'flex-start'
  }
}, onLeft && /*#__PURE__*/React.createElement("button", {
  onClick: onLeft,
  style: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 4,
    display: 'flex',
    alignItems: 'center'
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: leftIcon,
  size: 20,
  color: T.text1
}))), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.font,
    fontSize: 17,
    fontWeight: 600,
    color: T.text1,
    flex: 1,
    textAlign: 'center'
  }
}, title), /*#__PURE__*/React.createElement("div", {
  style: {
    width: 44,
    display: 'flex',
    justifyContent: 'flex-end',
    gap: 8
  }
}, rightItems.map((item, i) => /*#__PURE__*/React.createElement("button", {
  key: i,
  onClick: item.action,
  style: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 4,
    display: 'flex',
    alignItems: 'center'
  }
}, item.icon ? /*#__PURE__*/React.createElement(Icon, {
  name: item.icon,
  size: 20,
  color: item.active ? T.green : T.text2
}) : item.node))));
const SF_ICONS = {
  home: '../../assets/icons/sf/house.fill.svg',
  messages: '../../assets/icons/sf/paperplane.fill.svg',
  post: '../../assets/icons/sf/plus.app.fill.svg',
  notifications: '../../assets/icons/sf/bell.fill.svg',
  account: '../../assets/icons/sf/person.circle.fill.svg'
};

// CSS filter to tint white SVGs to #79EDAF green
const GREEN_FILTER = 'invert(87%) sepia(22%) saturate(564%) hue-rotate(100deg) brightness(98%) contrast(96%)';
const TabBar = ({
  active,
  onTab,
  badge = {}
}) => {
  const tabs = [{
    id: 'home',
    label: 'Home'
  }, {
    id: 'messages',
    label: 'Messages'
  }, {
    id: 'post',
    label: 'Post'
  }, {
    id: 'notifications',
    label: 'Alerts'
  }, {
    id: 'account',
    label: 'Account'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: '8px 0 20px',
      background: T.appBg,
      borderTop: `1px solid ${T.border}`,
      flexShrink: 0
    }
  }, tabs.map(tab => {
    const isActive = active === tab.id;
    const badgeCount = badge[tab.id] || 0;
    return /*#__PURE__*/React.createElement("button", {
      key: tab.id,
      onClick: () => onTab(tab.id),
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
        padding: '0 6px',
        position: 'relative',
        minWidth: 52
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: SF_ICONS[tab.id],
      width: 24,
      height: 24,
      style: {
        display: 'block',
        objectFit: 'contain',
        filter: isActive ? GREEN_FILTER : 'none',
        opacity: isActive ? 1 : 0.45
      },
      alt: tab.label
    }), badgeCount > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: -4,
        right: -6,
        background: T.red,
        color: '#fff',
        borderRadius: 100,
        fontSize: 8,
        fontWeight: 700,
        fontFamily: T.font,
        minWidth: 14,
        height: 14,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 3px'
      }
    }, badgeCount)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: T.font,
        fontSize: 10,
        fontWeight: 500,
        color: isActive ? T.green : 'rgba(255,255,255,0.5)'
      }
    }, tab.label));
  }));
};
const FilterTabs = ({
  options,
  selected,
  onSelect
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: 0,
    padding: '0 16px',
    borderBottom: `1px solid ${T.border}`,
    background: T.appBg
  }
}, options.map(opt => {
  const isActive = selected === opt.id;
  return /*#__PURE__*/React.createElement("button", {
    key: opt.id,
    onClick: () => onSelect(opt.id),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '10px 14px',
      fontFamily: T.font,
      fontSize: 14,
      fontWeight: isActive ? 600 : 400,
      color: isActive ? T.text1 : T.text4,
      borderBottom: isActive ? `2px solid ${T.green}` : '2px solid transparent',
      transition: 'all 0.15s'
    }
  }, opt.label);
}));
const PostCard = ({
  post,
  onBid,
  onBidders,
  onComment,
  onOptions,
  onTap
}) => /*#__PURE__*/React.createElement("div", {
  onClick: onTap,
  style: {
    background: post.status === 'expired' ? T.redSubtle : T.cardBg,
    borderRadius: 16,
    padding: 16,
    cursor: onTap ? 'pointer' : 'default'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 12,
    marginBottom: 10
  }
}, /*#__PURE__*/React.createElement(Avatar, {
  initials: post.author.initials,
  size: 44,
  radius: 10
}), /*#__PURE__*/React.createElement("div", {
  style: {
    flex: 1
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.font,
    fontSize: 17,
    fontWeight: 700,
    color: T.text1
  }
}, post.author.name), /*#__PURE__*/React.createElement("button", {
  onClick: e => {
    e.stopPropagation();
    onOptions && onOptions(post);
  },
  style: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '0 2px'
  }
}, /*#__PURE__*/React.createElement("img", {
  src: "../../assets/icons/sf/ellipsis.svg",
  width: "18",
  height: "18",
  style: {
    objectFit: 'contain',
    opacity: 0.6
  },
  alt: ""
}))), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: 10,
    marginTop: 3,
    alignItems: 'center'
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.font,
    fontSize: 13,
    color: T.text4
  }
}, "\u2299 ", post.credits, " credits"), /*#__PURE__*/React.createElement("span", {
  style: {
    color: T.text5,
    fontSize: 10
  }
}, "\xB7"), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.font,
    fontSize: 13,
    color: T.text4
  }
}, "\uD83D\uDC65 ", post.bids, " bids"), /*#__PURE__*/React.createElement("span", {
  style: {
    color: T.text5,
    fontSize: 10
  }
}, "\xB7"), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.font,
    fontSize: 13,
    color: T.text4
  }
}, "\u23F1 ", post.timeAgo)))), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: T.font,
    fontSize: 17,
    color: T.text1,
    lineHeight: 1.45,
    marginBottom: post.location ? 10 : 0
  }
}, post.hashtags.map((h, i) => /*#__PURE__*/React.createElement("span", {
  key: i,
  style: {
    color: T.blue
  }
}, h, " ")), post.content), post.location && /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    marginBottom: 10
  }
}, /*#__PURE__*/React.createElement("img", {
  src: "../../assets/icons/sf/mappin.and.ellipse.svg",
  width: "16",
  height: "16",
  style: {
    objectFit: 'contain',
    filter: 'invert(72%) sepia(40%) saturate(500%) hue-rotate(185deg) brightness(100%) contrast(95%)'
  },
  alt: ""
}), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.font,
    fontSize: 14,
    color: T.blue
  }
}, post.location)), post.status === 'accepted' && !post.isOwn && /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    color: T.green,
    fontFamily: T.font,
    fontSize: 15,
    fontWeight: 600,
    marginBottom: 10
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: "check",
  size: 16,
  color: T.green
}), " Your bid was accepted!"), post.status !== 'expired' && /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: 20,
    alignItems: 'center',
    paddingTop: 2
  }
}, !post.isOwn && post.status === 'open' && /*#__PURE__*/React.createElement("button", {
  onClick: e => {
    e.stopPropagation();
    onBid && onBid(post);
  },
  style: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    fontFamily: T.font,
    fontSize: 15,
    color: T.text2,
    padding: 0
  }
}, /*#__PURE__*/React.createElement("img", {
  src: "../../assets/icons/credit_icon.svg",
  width: "15",
  height: "15",
  style: {
    objectFit: 'contain'
  },
  alt: ""
}), " Bid"), /*#__PURE__*/React.createElement("button", {
  onClick: e => {
    e.stopPropagation();
    onComment && onComment(post);
  },
  style: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    fontFamily: T.font,
    fontSize: 15,
    color: T.text2,
    padding: 0
  }
}, /*#__PURE__*/React.createElement("img", {
  src: "../../assets/icons/sf/bubble.left.svg",
  width: "16",
  height: "16",
  style: {
    objectFit: 'contain'
  },
  alt: ""
}), " Comment"), post.isOwn ? /*#__PURE__*/React.createElement("button", {
  onClick: e => {
    e.stopPropagation();
    onBidders && onBidders(post);
  },
  style: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    fontFamily: T.font,
    fontSize: 15,
    color: T.text2,
    padding: 0,
    marginLeft: 'auto'
  }
}, /*#__PURE__*/React.createElement("img", {
  src: "../../assets/icons/sf/person.svg",
  width: "15",
  height: "16",
  style: {
    objectFit: 'contain'
  },
  alt: ""
}), " Bidders") : /*#__PURE__*/React.createElement("button", {
  style: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    fontFamily: T.font,
    fontSize: 15,
    color: T.text2,
    padding: 0
  }
}, /*#__PURE__*/React.createElement("img", {
  src: "../../assets/icons/sf/paperplane.fill.svg",
  width: "16",
  height: "16",
  style: {
    objectFit: 'contain'
  },
  alt: ""
}), " Message")));
const EmptyState = ({
  emoji = '📭',
  title,
  message
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '48px 32px',
    gap: 12
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 48
  }
}, emoji), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.font,
    fontSize: 18,
    fontWeight: 600,
    color: T.text1,
    textAlign: 'center'
  }
}, title), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.font,
    fontSize: 15,
    color: T.text4,
    textAlign: 'center',
    lineHeight: 1.5
  }
}, message));
Object.assign(window, {
  T,
  Icon,
  Divider,
  Avatar,
  Card,
  StatusBar,
  NavBar,
  TabBar,
  FilterTabs,
  PostCard,
  EmptyState,
  MOCK_POSTS,
  MOCK_CONVERSATIONS,
  MOCK_NOTIFICATIONS,
  MOCK_ACCOUNT
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ios_app/Components.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ios_app/FeedScreen.jsx
try { (() => {
// FeedScreen.jsx — Home / Feed tab

const FeedScreen = ({
  onTab
}) => {
  const {
    T,
    Icon,
    NavBar,
    TabBar,
    FilterTabs,
    PostCard,
    StatusBar
  } = window;
  const [filter, setFilter] = React.useState('feed');
  const [showSort, setShowSort] = React.useState(false);
  const [showSearch, setShowSearch] = React.useState(false);
  const [searchText, setSearchText] = React.useState('');
  const [bidPost, setBidPost] = React.useState(null);
  const [bidAmount, setBidAmount] = React.useState('');
  const [bidSent, setBidSent] = React.useState(false);
  const [detailPost, setDetailPost] = React.useState(null);
  const filterOpts = [{
    id: 'feed',
    label: 'Feed'
  }, {
    id: 'my_posts',
    label: 'My Posts'
  }, {
    id: 'my_bids',
    label: 'My Bids'
  }, {
    id: 'saved',
    label: 'Saved'
  }];
  const sortOpts = ['Newest', 'Expiring Soon', 'Near me'];
  let posts = MOCK_POSTS;
  if (filter === 'my_posts') posts = MOCK_POSTS.filter(p => p.isOwn);
  if (filter === 'my_bids') posts = MOCK_POSTS.filter(p => p.status === 'accepted' && !p.isOwn);
  if (filter === 'saved') posts = MOCK_POSTS.filter(p => p.isSaved);
  if (searchText) posts = posts.filter(p => p.content.toLowerCase().includes(searchText.toLowerCase()) || p.hashtags.some(h => h.includes(searchText)));
  const filterTitle = {
    feed: 'Feed',
    my_posts: 'My Posts',
    my_bids: 'My Bids',
    saved: 'Saved'
  }[filter];

  // Post detail view
  if (detailPost) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        background: T.appBg,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement(NavBar, {
      title: detailPost.author.name,
      onLeft: () => setDetailPost(null),
      leftIcon: "chevronLeft",
      rightItems: [{
        icon: 'dots',
        action: () => {}
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: 'auto',
        padding: '12px 16px',
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: T.cardBg,
        borderRadius: 16,
        padding: 16
      }
    }, /*#__PURE__*/React.createElement(PostCard, {
      post: detailPost,
      onBid: () => setBidPost(detailPost)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: T.font,
        fontSize: 14,
        fontWeight: 600,
        color: T.text3,
        padding: '4px 0'
      }
    }, "Comments"), [{
      author: 'Maria K',
      initials: 'MK',
      text: 'Is this still available?',
      time: '2h ago'
    }, {
      author: 'Sam B',
      initials: 'SB',
      text: 'I can help with the sofa part 💪',
      time: '1h ago'
    }].map((c, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement(window.Avatar, {
      initials: c.initials,
      size: 32,
      radius: 8
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        background: T.cardBg,
        borderRadius: 12,
        padding: '8px 12px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: T.font,
        fontSize: 13,
        fontWeight: 600,
        color: T.text1
      }
    }, c.author), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: T.font,
        fontSize: 14,
        color: T.text2,
        marginTop: 2
      }
    }, c.text), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: T.font,
        fontSize: 11,
        color: T.text4,
        marginTop: 4
      }
    }, c.time)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'center',
        background: T.cardBg,
        borderRadius: 100,
        padding: '10px 16px',
        marginTop: 4
      }
    }, /*#__PURE__*/React.createElement("input", {
      style: {
        flex: 1,
        background: 'none',
        border: 'none',
        outline: 'none',
        fontFamily: T.font,
        fontSize: 15,
        color: T.text1
      },
      placeholder: "Add a comment..."
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        color: T.blue,
        fontFamily: T.font,
        fontSize: 14,
        fontWeight: 600,
        cursor: 'pointer'
      }
    }, "Post"))), /*#__PURE__*/React.createElement(TabBar, {
      active: "home",
      onTab: onTab,
      badge: {
        notifications: 3
      }
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: T.appBg,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: '8px 20px 8px',
      borderBottom: `1px solid ${T.border}`
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => {},
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '4px 4px 4px 0'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sort",
    size: 20,
    color: T.text2
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.font,
      fontSize: 20,
      fontWeight: 700,
      color: T.text1,
      marginLeft: 10,
      flex: 1
    }
  }, filterTitle), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setShowSearch(s => !s);
    },
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 20,
    color: showSearch ? T.green : T.text2
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowSort(s => !s),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: T.text2,
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "8",
    y1: "6",
    x2: "21",
    y2: "6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "8",
    y1: "12",
    x2: "21",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "8",
    y1: "18",
    x2: "21",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "6",
    x2: "3.01",
    y2: "6",
    strokeWidth: "3"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "12",
    x2: "3.01",
    y2: "12",
    strokeWidth: "3"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "18",
    x2: "3.01",
    y2: "18",
    strokeWidth: "3"
  })), showSort && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 0,
      top: 28,
      background: T.elevated,
      borderRadius: 12,
      padding: '8px 0',
      zIndex: 10,
      minWidth: 160,
      boxShadow: '0 4px 20px rgba(0,0,0,0.6)'
    }
  }, sortOpts.map(s => /*#__PURE__*/React.createElement("div", {
    key: s,
    onClick: () => setShowSort(false),
    style: {
      padding: '12px 16px',
      fontFamily: T.font,
      fontSize: 15,
      color: T.text1,
      cursor: 'pointer'
    }
  }, s)))))), showSearch && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 16px',
      background: T.appBg,
      borderBottom: `1px solid ${T.border}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: T.cardBg,
      borderRadius: 10,
      padding: '8px 14px',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 16,
    color: T.text4
  }), /*#__PURE__*/React.createElement("input", {
    value: searchText,
    onChange: e => setSearchText(e.target.value),
    placeholder: "Search by keyword",
    style: {
      flex: 1,
      background: 'none',
      border: 'none',
      outline: 'none',
      fontFamily: T.font,
      fontSize: 15,
      color: T.text1
    }
  }))), /*#__PURE__*/React.createElement(FilterTabs, {
    options: filterOpts,
    selected: filter,
    onSelect: setFilter
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '12px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, posts.length === 0 ? /*#__PURE__*/React.createElement(window.EmptyState, {
    emoji: "\uD83D\uDCED",
    title: "It's empty over here",
    message: `There are no ${filterTitle.toLowerCase()} to show at this time.`
  }) : posts.map(post => /*#__PURE__*/React.createElement(PostCard, {
    key: post.id,
    post: post,
    onBid: setBidPost,
    onTap: () => setDetailPost(post)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 12
    }
  })), bidPost && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(0,0,0,0.7)',
      display: 'flex',
      alignItems: 'flex-end',
      zIndex: 100
    },
    onClick: () => {
      setBidPost(null);
      setBidSent(false);
      setBidAmount('');
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: T.elevated,
      borderRadius: '20px 20px 0 0',
      padding: 24,
      width: '100%'
    }
  }, bidSent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 16,
      paddingBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: '50%',
      background: T.green,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 28,
    color: "#000"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.font,
      fontSize: 18,
      fontWeight: 700,
      color: T.text1
    }
  }, "Bid placed!"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.font,
      fontSize: 15,
      color: T.text3,
      textAlign: 'center'
    }
  }, "Your bid of ", bidAmount, " credits has been submitted."), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setBidPost(null);
      setBidSent(false);
      setBidAmount('');
    },
    style: {
      background: T.cardBg,
      border: 'none',
      borderRadius: 100,
      padding: '12px 32px',
      fontFamily: T.font,
      fontSize: 16,
      color: T.text1,
      cursor: 'pointer',
      width: '100%'
    }
  }, "Close")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.font,
      fontSize: 18,
      fontWeight: 700,
      color: T.text1,
      marginBottom: 4
    }
  }, "Place a Bid"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.font,
      fontSize: 14,
      color: T.text4,
      marginBottom: 20
    }
  }, "Starting offer: ", bidPost.credits, " credits"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: T.cardBg,
      borderRadius: 12,
      padding: '12px 16px',
      marginBottom: 16,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.font,
      fontSize: 16,
      color: T.text2
    }
  }, "Your bid (credits)"), /*#__PURE__*/React.createElement("input", {
    value: bidAmount,
    onChange: e => setBidAmount(e.target.value),
    placeholder: String(bidPost.credits),
    type: "number",
    style: {
      background: T.elevated,
      border: 'none',
      outline: 'none',
      borderRadius: 8,
      padding: '6px 12px',
      fontFamily: T.font,
      fontSize: 16,
      color: T.text1,
      width: 80,
      textAlign: 'center'
    }
  })), bidAmount > bidPost.credits && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.font,
      fontSize: 13,
      color: T.yellow,
      marginBottom: 12
    }
  }, "\u26A0 Your bid is higher than the initial offer."), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      if (bidAmount) setBidSent(true);
    },
    style: {
      width: '100%',
      background: bidAmount ? T.green : T.cardBg,
      color: bidAmount ? '#000' : T.text4,
      border: 'none',
      borderRadius: 100,
      padding: '14px 0',
      fontFamily: T.font,
      fontSize: 16,
      fontWeight: 600,
      cursor: bidAmount ? 'pointer' : 'default',
      transition: 'all 0.2s'
    }
  }, "Confirm Bid")))), /*#__PURE__*/React.createElement(TabBar, {
    active: "home",
    onTab: onTab,
    badge: {
      notifications: 3
    }
  }));
};
Object.assign(window, {
  FeedScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ios_app/FeedScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ios_app/MessagesScreen.jsx
try { (() => {
// MessagesScreen.jsx — Messages tab + conversation view

const MessagesScreen = ({
  onTab
}) => {
  const {
    T,
    Icon,
    NavBar,
    StatusBar,
    TabBar,
    Avatar,
    Divider,
    EmptyState
  } = window;
  const [openConvo, setOpenConvo] = React.useState(null);
  const [newMsg, setNewMsg] = React.useState('');
  const [messages, setMessages] = React.useState(null);
  const openConversation = convo => {
    setOpenConvo(convo);
    setMessages(convo.messages);
  };
  const sendMessage = () => {
    if (!newMsg.trim()) return;
    setMessages(prev => [...prev, {
      id: `m${Date.now()}`,
      text: newMsg,
      sentByMe: true,
      time: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      }),
      read: false
    }]);
    setNewMsg('');
  };

  // Conversation view
  if (openConvo) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        background: T.appBg,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement(NavBar, {
      title: openConvo.other.name,
      onLeft: () => setOpenConvo(null),
      leftIcon: "chevronLeft"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        background: T.cardBg,
        padding: '8px 16px',
        borderBottom: `1px solid ${T.border}`
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: T.font,
        fontSize: 13,
        color: T.text4
      }
    }, "Re: "), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: T.font,
        fontSize: 13,
        color: T.blue
      }
    }, openConvo.postTitle)), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '10px 20px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: T.cardBg,
        borderRadius: 10,
        padding: '8px 14px',
        fontFamily: T.font,
        fontSize: 12,
        color: T.text4,
        textAlign: 'center',
        lineHeight: 1.5
      }
    }, "This chat is not end-to-end encrypted. Do not share sensitive information.")), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: 'auto',
        padding: '0 16px',
        display: 'flex',
        flexDirection: 'column',
        gap: 6
      }
    }, messages.map((msg, i) => {
      const isLast = i === messages.length - 1 || messages[i + 1]?.sentByMe !== msg.sentByMe;
      return /*#__PURE__*/React.createElement("div", {
        key: msg.id,
        style: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: msg.sentByMe ? 'flex-end' : 'flex-start'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          padding: '10px 14px',
          background: msg.sentByMe ? T.greenMuted : T.blueMuted,
          borderRadius: msg.sentByMe ? `18px 18px ${isLast ? '4px' : '18px'} 18px` : `18px 18px 18px ${isLast ? '4px' : '18px'}`,
          maxWidth: '75%',
          fontFamily: T.font,
          fontSize: 16,
          color: T.text1,
          lineHeight: 1.4
        }
      }, msg.text), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          marginTop: 2
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: T.font,
          fontSize: 11,
          color: T.text4
        }
      }, msg.time), msg.sentByMe && /*#__PURE__*/React.createElement("svg", {
        width: "12",
        height: "12",
        viewBox: "0 0 24 24"
      }, /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "12",
        fill: msg.read ? T.greenMuted : T.text5
      }), /*#__PURE__*/React.createElement("path", {
        d: "M7 12.5l3.5 3.5 6.5-7",
        stroke: msg.read ? '#000' : '#fff',
        strokeWidth: "2.2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none"
      }))));
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 8
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '8px 16px 16px',
        borderTop: `1px solid ${T.border}`,
        display: 'flex',
        gap: 10,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        background: T.cardBg,
        borderRadius: 24,
        padding: '10px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("input", {
      value: newMsg,
      onChange: e => setNewMsg(e.target.value),
      onKeyDown: e => e.key === 'Enter' && sendMessage(),
      placeholder: "Message...",
      style: {
        flex: 1,
        background: 'none',
        border: 'none',
        outline: 'none',
        fontFamily: T.font,
        fontSize: 15,
        color: T.text1
      }
    })), /*#__PURE__*/React.createElement("button", {
      onClick: sendMessage,
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontFamily: T.font,
        fontSize: 15,
        fontWeight: 600,
        color: newMsg.trim() ? T.blue : T.text5
      }
    }, "Send")), /*#__PURE__*/React.createElement(TabBar, {
      active: "messages",
      onTab: onTab,
      badge: {
        notifications: 3
      }
    }));
  }

  // Conversations list
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: T.appBg,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 20px 10px',
      borderBottom: `1px solid ${T.border}`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.font,
      fontSize: 20,
      fontWeight: 700,
      color: T.text1
    }
  }, "Messages")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto'
    }
  }, MOCK_CONVERSATIONS.length === 0 ? /*#__PURE__*/React.createElement(EmptyState, {
    emoji: "\u2709\uFE0F",
    title: "No messages yet",
    message: "Messages about your posts will appear here."
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.font,
      fontSize: 13,
      fontWeight: 600,
      color: T.text4,
      padding: '4px 0 2px'
    }
  }, "Active"), MOCK_CONVERSATIONS.filter(c => !c.archived).map(convo => /*#__PURE__*/React.createElement("button", {
    key: convo.id,
    onClick: () => openConversation(convo),
    style: {
      background: T.cardBg,
      border: 'none',
      borderRadius: 16,
      padding: 14,
      cursor: 'pointer',
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: convo.other.initials,
    size: 48,
    radius: 24
  }), convo.unread > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -2,
      right: -2,
      background: T.red,
      color: '#fff',
      borderRadius: 100,
      fontSize: 9,
      fontWeight: 700,
      fontFamily: T.font,
      minWidth: 16,
      height: 16,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 4px'
    }
  }, convo.unread)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.font,
      fontSize: 16,
      fontWeight: convo.unread ? 700 : 500,
      color: T.text1
    }
  }, convo.other.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.font,
      fontSize: 12,
      color: T.text4
    }
  }, convo.time)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.font,
      fontSize: 13,
      color: T.blue,
      marginBottom: 2
    }
  }, "Re: ", convo.postTitle), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.font,
      fontSize: 14,
      color: convo.unread ? T.text2 : T.text4,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, convo.lastMessage)))), /*#__PURE__*/React.createElement("button", {
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: T.font,
      fontSize: 14,
      color: T.blue,
      textAlign: 'center',
      padding: '8px 0'
    }
  }, "Load archived"))), /*#__PURE__*/React.createElement(TabBar, {
    active: "messages",
    onTab: onTab,
    badge: {
      notifications: 3
    }
  }));
};
Object.assign(window, {
  MessagesScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ios_app/MessagesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ios_app/NotificationsScreen.jsx
try { (() => {
// NotificationsScreen.jsx — Notifications tab

const NotificationsScreen = ({
  onTab
}) => {
  const {
    T,
    NavBar,
    StatusBar,
    TabBar,
    EmptyState
  } = window;
  const [notifications, setNotifications] = React.useState(MOCK_NOTIFICATIONS);
  const markAllRead = () => setNotifications(prev => prev.map(n => ({
    ...n,
    read: true
  })));
  const unreadCount = notifications.filter(n => !n.read).length;
  const iconColor = type => {
    if (type === 'bid_accepted') return T.green;
    if (type === 'credits' || type === 'referral') return T.green;
    if (type === 'bid') return T.blue;
    return T.text3;
  };
  const iconBg = type => {
    if (type === 'bid_accepted' || type === 'credits' || type === 'referral') return 'rgba(121,237,175,0.15)';
    if (type === 'bid') return 'rgba(117,175,239,0.15)';
    return T.cardBg;
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: T.appBg,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 20px 10px',
      borderBottom: `1px solid ${T.border}`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.font,
      fontSize: 20,
      fontWeight: 700,
      color: T.text1
    }
  }, "Notifications"), unreadCount > 0 && /*#__PURE__*/React.createElement("button", {
    onClick: markAllRead,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: T.font,
      fontSize: 14,
      color: T.blue
    }
  }, "Mark all as read")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '12px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, notifications.length === 0 ? /*#__PURE__*/React.createElement(EmptyState, {
    emoji: "\uD83D\uDD14",
    title: "It's empty over here",
    message: "There are no notifications to show at this time."
  }) : notifications.map(notif => /*#__PURE__*/React.createElement("div", {
    key: notif.id,
    onClick: () => setNotifications(prev => prev.map(n => n.id === notif.id ? {
      ...n,
      read: true
    } : n)),
    style: {
      background: notif.read ? T.cardBg : 'rgba(121,237,175,0.06)',
      borderRadius: 14,
      padding: 14,
      cursor: 'pointer',
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      border: notif.read ? 'none' : `1px solid rgba(121,237,175,0.15)`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 20,
      background: iconBg(notif.type),
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 18
    }
  }, notif.type === 'bid' && /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: iconColor(notif.type),
    strokeWidth: "1.8"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  })), notif.type === 'bid_accepted' && /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: iconColor(notif.type),
    strokeWidth: "2.5"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  })), notif.type === 'comment' && /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: iconColor(notif.type),
    strokeWidth: "1.8"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
  })), notif.type === 'credits' && /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: iconColor(notif.type),
    strokeWidth: "1.8"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  })), notif.type === 'referral' && /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: iconColor(notif.type),
    strokeWidth: "1.8"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "7",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M23 21v-2a4 4 0 00-3-3.87"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 3.13a4 4 0 010 7.75"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.font,
      fontSize: 15,
      fontWeight: notif.read ? 500 : 700,
      color: T.text1
    }
  }, notif.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.font,
      fontSize: 11,
      color: T.text4,
      marginLeft: 8,
      flexShrink: 0
    }
  }, notif.time)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.font,
      fontSize: 14,
      color: T.text3,
      lineHeight: 1.45
    }
  }, notif.body)), !notif.read && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: T.green,
      flexShrink: 0,
      marginTop: 4
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8
    }
  })), /*#__PURE__*/React.createElement(TabBar, {
    active: "notifications",
    onTab: onTab,
    badge: {
      notifications: unreadCount
    }
  }));
};
Object.assign(window, {
  NotificationsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ios_app/NotificationsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ios_app/OnboardingScreen.jsx
try { (() => {
// OnboardingScreen.jsx — Welcome slides + Create Account flow

const OnboardingScreen = ({
  onComplete
}) => {
  const {
    T
  } = window;
  const [slide, setSlide] = React.useState(0);
  const [screen, setScreen] = React.useState('welcome'); // welcome | create
  const [step, setStep] = React.useState('form'); // form | done (used in create screen)

  const slides = [{
    title: 'Welcome to SHOK',
    message: 'Get help when you need it, give help when you can — be part of a supportive community',
    illustration: '../../assets/illustrations/welcome_to_shok.svg'
  }, {
    title: 'Bid, earn, spend',
    message: 'Start with 100 credits, and let the community help you thrive in a caring network',
    illustration: '../../assets/illustrations/bid_earn_spend.svg'
  }, {
    title: 'Share the fun',
    message: 'Help grow a trustworthy community by inviting your friends to join',
    illustration: '../../assets/illustrations/grow_community.svg'
  }];

  // Create Account screen
  if (screen === 'create') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        background: T.appBg,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 50,
        display: 'flex',
        alignItems: 'flex-end',
        paddingBottom: 8,
        paddingLeft: 24,
        paddingRight: 20
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: T.font,
        fontSize: 15,
        fontWeight: 600,
        color: T.text1,
        flex: 1
      }
    }, "13:59")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        padding: '8px 20px 10px',
        borderBottom: `1px solid ${T.border}`
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setScreen('welcome'),
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '4px 8px 4px 0'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: T.text1,
      strokeWidth: "2"
    }, /*#__PURE__*/React.createElement("polyline", {
      points: "15 18 9 12 15 6"
    }))), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: T.font,
        fontSize: 17,
        fontWeight: 600,
        color: T.text1,
        flex: 1,
        textAlign: 'center'
      }
    }, "Create Account"), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 28
      }
    })), step === 'done' ? /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 32,
        gap: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 72,
        height: 72,
        borderRadius: '50%',
        background: T.green,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "32",
      height: "32",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#000",
      strokeWidth: "2.5"
    }, /*#__PURE__*/React.createElement("polyline", {
      points: "20 6 9 17 4 12"
    }))), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: T.font,
        fontSize: 22,
        fontWeight: 700,
        color: T.text1
      }
    }, "Welcome to Shok!"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: T.font,
        fontSize: 16,
        color: T.text3,
        textAlign: 'center',
        lineHeight: 1.5
      }
    }, "Your account is ready. You have 100 credits to get started."), /*#__PURE__*/React.createElement("button", {
      onClick: onComplete,
      style: {
        background: T.green,
        color: '#000',
        border: 'none',
        borderRadius: 14,
        padding: '15px 40px',
        fontFamily: T.font,
        fontSize: 17,
        fontWeight: 600,
        cursor: 'pointer',
        width: '100%',
        marginTop: 8
      }
    }, "Start Exploring")) : /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: 'auto',
        padding: '20px 16px',
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: T.cardBg,
        borderRadius: 16,
        overflow: 'hidden'
      }
    }, [['Name', ''], ['Surname', ''], ['Username', ''], ['Date of Birth', '4. Jun 2010', true]].map(([label, val, isDate], i, arr) => /*#__PURE__*/React.createElement(React.Fragment, {
      key: label
    }, isDate ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '14px 16px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: T.font,
        fontSize: 16,
        color: T.text1
      }
    }, label, ":"), /*#__PURE__*/React.createElement("div", {
      style: {
        background: T.elevated,
        borderRadius: 8,
        padding: '5px 12px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: T.font,
        fontSize: 14,
        color: T.text1
      }
    }, val || '4. Jun 2010'))) : /*#__PURE__*/React.createElement("input", {
      placeholder: label,
      style: {
        width: '100%',
        background: 'transparent',
        border: 'none',
        outline: 'none',
        padding: '14px 16px',
        fontFamily: T.font,
        fontSize: 16,
        color: T.text1
      }
    }), i < arr.length - 1 && /*#__PURE__*/React.createElement("div", {
      style: {
        height: 1,
        background: T.border,
        margin: '0 16px'
      }
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: T.cardBg,
        borderRadius: 16,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("input", {
      placeholder: "Referral Code (optional)",
      style: {
        width: '100%',
        background: 'transparent',
        border: 'none',
        outline: 'none',
        padding: '14px 16px',
        fontFamily: T.font,
        fontSize: 16,
        color: T.text1
      }
    })), /*#__PURE__*/React.createElement("button", {
      onClick: () => setStep('done'),
      style: {
        width: '100%',
        background: T.elevated,
        color: T.text1,
        border: 'none',
        borderRadius: 14,
        padding: '15px 0',
        fontFamily: T.font,
        fontSize: 17,
        fontWeight: 600,
        cursor: 'pointer'
      }
    }, "Register")));
  }

  // Welcome / onboarding slides
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: T.appBg
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 50,
      display: 'flex',
      alignItems: 'flex-end',
      paddingBottom: 8,
      paddingLeft: 24,
      paddingRight: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.font,
      fontSize: 15,
      fontWeight: 600,
      color: T.text1
    }
  }, "13:59")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(30,28,35,0.95)',
      borderRadius: 28,
      width: '100%',
      maxWidth: 320,
      aspectRatio: '1/0.9',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: slides[slide].illustration,
    alt: slides[slide].title,
    style: {
      width: '85%',
      height: '85%',
      objectFit: 'contain'
    },
    onError: e => {
      e.target.style.display = 'none';
    }
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: T.font,
      fontSize: 26,
      fontWeight: 700,
      color: T.text1,
      textAlign: 'center',
      marginBottom: 10,
      lineHeight: 1.25
    }
  }, slides[slide].title), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 3,
      background: T.green,
      borderRadius: 2,
      marginBottom: 16
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: T.font,
      fontSize: 16,
      color: T.text2,
      textAlign: 'center',
      lineHeight: 1.55,
      maxWidth: 300
    }
  }, slides[slide].message)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 8,
      padding: '16px 0'
    }
  }, slides.map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    onClick: () => setSlide(i),
    style: {
      width: i === slide ? 20 : 7,
      height: 7,
      borderRadius: 100,
      background: i === slide ? T.green : T.text5,
      cursor: 'pointer',
      transition: 'all 0.2s'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 24px 40px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      if (slide < slides.length - 1) setSlide(s => s + 1);else setScreen('create');
    },
    style: {
      width: '100%',
      background: T.green,
      color: '#000',
      border: 'none',
      borderRadius: 14,
      padding: '16px 0',
      fontFamily: T.font,
      fontSize: 17,
      fontWeight: 600,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10
    }
  }, slide === slides.length - 1 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "22",
    viewBox: "0 0 814 1000",
    fill: "#000"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-36.8-162.8-106.3C141 393.5 50 271.6 50 155.5c0-103.1 67.3-157.8 132.2-157.8 57.5 0 105.2 40.6 141 40.6 34.1 0 89.7-43.5 155.7-43.5 21.4 0 107.8 2.3 167 82.4zm-7.3-141.3c0-63-29.5-90.5-90.5-90.5-49.4 0-95.6 24.1-138 68.2-37.4 38.8-76.9 103.5-76.9 141.7 0 5.4.5 10.8 1.5 15.2 1 .3 2.4.3 3.7.3 51.5 0 106.5-22.7 145.8-65.4 37-38.7 54.4-87.3 54.4-69.5z"
  })), "Continue with Apple") : 'Continue')));
};
Object.assign(window, {
  OnboardingScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ios_app/OnboardingScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ios_app/PostScreen.jsx
try { (() => {
// PostScreen.jsx — New Post creation tab

const PostScreen = ({
  onTab
}) => {
  const {
    T,
    Icon,
    NavBar,
    StatusBar,
    TabBar
  } = window;
  const [text, setText] = React.useState('');
  const [credits, setCredits] = React.useState('');
  const [location] = React.useState('Basler Straße 60, Bavaria, Ger...');
  const [expiry] = React.useState('14. Jun 2026');
  const [posted, setPosted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const canPost = text.trim().length > 0 && credits > 0;
  const handlePost = () => {
    if (!canPost) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setPosted(true);
    }, 1200);
  };
  if (posted) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        background: T.appBg,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 32,
        gap: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 72,
        height: 72,
        borderRadius: '50%',
        background: T.green,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "32",
      height: "32",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#000",
      strokeWidth: "2.5"
    }, /*#__PURE__*/React.createElement("polyline", {
      points: "20 6 9 17 4 12"
    }))), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: T.font,
        fontSize: 22,
        fontWeight: 700,
        color: T.text1
      }
    }, "Post published!"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: T.font,
        fontSize: 16,
        color: T.text3,
        textAlign: 'center',
        lineHeight: 1.5
      }
    }, "Your request is live. Community members can now bid to help."), /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        setText('');
        setCredits('');
        setPosted(false);
        onTab('home');
      },
      style: {
        background: T.green,
        color: '#000',
        border: 'none',
        borderRadius: 14,
        padding: '14px 40px',
        fontFamily: T.font,
        fontSize: 16,
        fontWeight: 600,
        cursor: 'pointer',
        marginTop: 8
      }
    }, "View Feed")), /*#__PURE__*/React.createElement(TabBar, {
      active: "post",
      onTab: onTab,
      badge: {
        notifications: 3
      }
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: T.appBg,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement(NavBar, {
    title: "New Post",
    onLeft: () => onTab('home'),
    leftIcon: "xmark",
    noBorder: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '20px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: T.cardBg,
      borderRadius: 16,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("textarea", {
    value: text,
    onChange: e => setText(e.target.value),
    placeholder: "How can the community help you?",
    style: {
      width: '100%',
      minHeight: 100,
      background: 'transparent',
      border: `1px solid ${text ? T.blue : T.border}`,
      borderRadius: 10,
      padding: '12px 14px',
      fontFamily: T.font,
      fontSize: 17,
      color: T.text1,
      outline: 'none',
      resize: 'none',
      lineHeight: 1.45
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: T.border
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '14px 16px'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: T.blue,
    strokeWidth: "1.8"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "9",
    r: "2.5"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.font,
      fontSize: 16,
      color: T.blue,
      flex: 1
    }
  }, location), /*#__PURE__*/React.createElement("button", {
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: T.text4,
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: T.border
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '14px 16px'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "17",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: T.text2,
    strokeWidth: "1.8"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.font,
      fontSize: 16,
      color: T.text2,
      flex: 1
    }
  }, "Credits"), /*#__PURE__*/React.createElement("input", {
    value: credits,
    onChange: e => setCredits(e.target.value),
    placeholder: "e.g. 5",
    type: "number",
    min: "1",
    style: {
      background: T.elevated,
      border: 'none',
      outline: 'none',
      borderRadius: 8,
      padding: '5px 12px',
      fontFamily: T.font,
      fontSize: 15,
      color: T.text1,
      width: 72,
      textAlign: 'center'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: T.border
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '14px 16px'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "17",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: T.text2,
    strokeWidth: "1.8"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "12 6 12 12 16 14"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.font,
      fontSize: 16,
      color: T.text2,
      flex: 1
    }
  }, "Expiry date"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: T.elevated,
      borderRadius: 8,
      padding: '5px 12px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.font,
      fontSize: 14,
      color: T.text1
    }
  }, expiry)))), credits > 50 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.font,
      fontSize: 13,
      color: T.yellow,
      padding: '0 4px'
    }
  }, "\u26A0 Your bid is higher than the initial offer."), /*#__PURE__*/React.createElement("button", {
    onClick: handlePost,
    style: {
      width: '100%',
      background: canPost ? T.green : T.cardBg,
      color: canPost ? '#000' : T.text5,
      border: 'none',
      borderRadius: 14,
      padding: '15px 0',
      fontFamily: T.font,
      fontSize: 17,
      fontWeight: 600,
      cursor: canPost ? 'pointer' : 'default',
      transition: 'all 0.2s',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8
    }
  }, loading ? /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: canPost ? '#000' : T.text5,
    strokeWidth: "2.5",
    style: {
      animation: 'spin 1s linear infinite'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
  })) : 'Post')), /*#__PURE__*/React.createElement("style", null, `@keyframes spin { to { transform: rotate(360deg); } }`), /*#__PURE__*/React.createElement(TabBar, {
    active: "post",
    onTab: onTab,
    badge: {
      notifications: 3
    }
  }));
};
Object.assign(window, {
  PostScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ios_app/PostScreen.jsx", error: String((e && e.message) || e) }); }

})();
