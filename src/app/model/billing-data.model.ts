/**
 * Billing data collected throughout the form.
 */
export interface BillingData {
  info: {
    name: string;
    email: string;
    password: string;
  };
  plan: {
    type: string;
    price: number;
  };
  addOns: AddOn[];
  isYearly: boolean;
}

/**
 * Add-on information.
 */
interface AddOn {
  name: string;
  description: string;
  price: number;
  isAdded: boolean;
}

/**
 * Type to ensure the correct structure when updating a specific step's data.
 */
export type BillingDataUpdate = {
  [TStep in keyof BillingData]: BillingData[TStep];
};
