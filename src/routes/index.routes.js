import React from 'react';

import AppRoutes from './app.routes';
import OnboardingRoutes from './onboarding.routes';

export default function Routes() {
    const isUserLoggedIn = false;

    return (
        <>
            { isUserLoggedIn 
                ? <AppRoutes />
                : <OnboardingRoutes />
            }
        </>
    );
}