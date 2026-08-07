const configuredSiteUrl = import.meta.env.VITE_SITE_URL || "https://teslim.digital";

export const SITE_URL = configuredSiteUrl.replace(/\/$/, "");

export const BOOKING_URL =
  "https://ablink.send.calendly.com/ls/click?upn=u001.-2FpFZHOmNsCfytAyhc9roxA5LD773niqqD0IJajnN0YWAh4u17NoxhQF3waIyR-2BsCGwZnLuUZCd0bVghPIsvJVm1IDhUtcLmBVWcPM9XzrZLFjMLbB-2FyvrSBKOVhRMAJejcXqGpW8oXU9CEXUwfSS-2FE-2Bf-2BxWJbk3eSG0H7tiOc-2FotmpWjNa7svGw-2Fx-2BXLRxDzeWHN-2FZyaCj9XItenIQkVNQ-3D-3D9XMA_H-2Ba2icJftUiQ5Ai7F-2F6vIehEFbxvzbeRV7-2BVmqbxcRZspqc7IGqgawvffq4y4ee6u7CeqJ-2FhkXVFXyMINd0pZsDB5-2FPaX0Pm1JvFS9hm-2FWJNOtzDzSF8h6vt7yeTRPOawpI1a60zbVJ2-2BkhNW5mqN8dB67G1VCPDXZ8pblxG4VI-2FazVdkWVmKP7i3i7pTc9iPqd3pfDBjkpYFEQZfndwpXFjvNq5g5-2BD-2B-2FwJGOA1Gl1q1PAqxwQzH2PNGiBjcJfTyhR-2BqRudmWbTaEnqWCGBeuA7XOZQGZQrI2a4ngzTf53U6bhsyHL0Srz6WuBbLecjLURtq0w3PYtftDDmaNyhww-2B7TRbl-2B4yRx-2B2hOR4CPRKPrZhj7GVtx9JErSNpKFQQeV6sTjiMVBIXeA322vbdirGisVHuOFeSuj1JVrDxr3eWiSM1pbqsiIwDdujTLtyfw8i4W-2B3pMKdS8sXqU0TIJu9vFNBb5VVhtW0Y-2FH-2Fb84MHOC-2BtifcbdRG9RXKa9GxhJWuzSw8ZbecHq0ZubyA-2B48BCD7-2FCVHVVD0ce6A-2BKoQNwRRdA-2FTMolNruH9j-2Fj2nb-2FbcaybPmY-2FMcPH5NU5pXlTaWDn4vCHnRddfHkXfoeA-2Fsm7AsXMR8Kh4ySSj7po9U9-2BHnyTQ0X-2Bu4l3IjGa6vx81HtWVP8mEaB6OS-2BNEOvt3TZMGBpOF9TUXLUBYcf41swRamIzqUrm1h6sk-2FR6pWFd9Q6UGKI2zIWbiw6tYe-2BjEWZ0fjxY3zJFkzUouTtuM4";

export const STORE_URL = "https://teslimdigital.shop";

export const CONTACT_EMAIL = "hello@teslim.digital";
export const SUPPORT_EMAIL = "support@teslim.digital";

export function absoluteUrl(path = "/") {
  return new URL(path, `${SITE_URL}/`).toString();
}
