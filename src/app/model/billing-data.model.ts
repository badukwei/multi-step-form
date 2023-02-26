export interface BillingData {
    info: {
      name: string,
      email: string,
      password: string,
    },
    plan: {
      type: string,
      price: number,
    },
    addOns: AddOn[],
    isYearly: boolean,
}

interface AddOn {
  name: string;
  description: string;
  price: number;
  isAdded: boolean;
}

