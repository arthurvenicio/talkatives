const APP_ROUTES = {
  private: {
    dashboard: {
      name: '/dashboard'
    },
    dashboard_modules: {
      name: '/dashboard/modules'
    },
    dashboard_lessons: {
      name: '/dashboard/lessons'
    },
    dashboard_lesson: {
      name: '/dashboard/lesson'
    },
    dashboard_ranking: {
      name: '/dashboard/ranking'
    },
    dashboard_account: {
      name: '/dashboard/account'
    }
  },
  public: {
    '/': '/',
    'not-found': '/not-found',
    login: '/login',
    forgot_email: '/forgot-email',
    reset_password: '/reset-password',
    recovery_password: '/recovery-password'
  },
  api: {
    teacher: '/api/teacher'
  }
};

export { APP_ROUTES };
