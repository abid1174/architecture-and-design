// Solution:

// ===== STEP 1: Common Interface =====
interface IPayment {
  pay(amount: number, paymentData: any): boolean;
}

// ===== STEP 2: Legacy and External Classes (Unchanged) =====
class BankPayment {
  processPayment(amount: number, accountNumber: string): boolean {
    console.log(
      `BankPayment: Paying ${amount} to the account ${accountNumber}`
    );
    return true;
  }
}

class StripePayment {
  charge(
    amount: number,
    token: string
  ): { success: boolean; transactionId: string } {
    console.log(`Stripe: Charging $${amount} with token ${token}`);
    return { success: true, transactionId: `stripe_${Date.now()}` };
  }
}

class PayPalPayment {
  executePayment(paymentData: { amount: number; email: string }): string {
    console.log(
      `PayPal: Processing $${paymentData.amount} for ${paymentData.email}`
    );
    return `paypal_${Date.now()}`;
  }
}

// ===== STEP 3: Adapter Classes =====

class BankPaymentAdapter implements IPayment {
  constructor(private bankPayment: BankPayment) {}

  pay(amount: number, paymentData: { accountNumber: string }): boolean {
    return this.bankPayment.processPayment(amount, paymentData.accountNumber);
  }
}

class StripePaymentAdapter implements IPayment {
  constructor(private stripePayment: StripePayment) {}

  pay(amount: number, paymentData: { token: string }): boolean {
    this.stripePayment.charge(amount, paymentData.token);
    return true;
  }
}

class PayPalPaymentAdapter implements IPayment {
  constructor(private paypalPayment: PayPalPayment) {}

  pay(amount: number, paymentData: { email: string }): boolean {
    this.paypalPayment.executePayment({
      amount: amount,
      ...paymentData,
    });
    return true;
  }
}

// ===== STEP 4: Payment Service (Simplified) =====
// class PaymentService {
//   constructor(private payment: IPayment) {}

//   processPayment(amount: number, paymentData: any): boolean {
//     return this.payment.pay(amount, paymentData);
//   }
// }

// // ===== STEP 5: Client Code =====
// // pay with bank payment
// const bankPayment = new BankPayment();
// const bankPaymentAdapter = new BankPaymentAdapter(bankPayment);
// const paymentService = new PaymentService(bankPaymentAdapter);
// paymentService.processPayment(100, { accountNumber: "1234567890" });

// // pay with stripe payment
// const stripePayment = new StripePayment();
// const stripePaymentAdapter = new StripePaymentAdapter(stripePayment);
// const paymentService2 = new PaymentService(stripePaymentAdapter);
// paymentService2.processPayment(100, { token: "1234567890" });

// // pay with paypal payment
// const paypalPayment = new PayPalPayment();
// const paypalPaymentAdapter = new PayPalPaymentAdapter(paypalPayment);
// const paymentService3 = new PaymentService(paypalPaymentAdapter);
// paymentService3.processPayment(100, { email: "test@test.com" });

// ===== STEP 4: Payment Service () =====
class PaymentService {
    private providers: Map<string, IPayment>;

    constructor() {
        this.providers = new Map();
    }

    addProvider(name: string, provider: IPayment) {
        this.providers.set(name, provider);
    }

    processPayment(amount: number, paymentData: any): boolean {
        const provider = this.providers.get(paymentData.provider);
        if (!provider) {
            throw new Error(`Provider ${paymentData.provider} not found`);
        }
        return provider.pay(amount, paymentData);
    }
}

// ===== STEP 5: Client Code =====
const paymentService = new PaymentService();
paymentService.addProvider("bank", new BankPaymentAdapter(new BankPayment()));
paymentService.addProvider("stripe", new StripePaymentAdapter(new StripePayment()));
paymentService.addProvider("paypal", new PayPalPaymentAdapter(new PayPalPayment()));

paymentService.processPayment(100, { provider: "bank", accountNumber: "1234567890" });
paymentService.processPayment(100, { provider: "stripe", token: "1234567890" });
paymentService.processPayment(100, { provider: "paypal", email: "test@test.com" });



// ❌ BAD APPROACH (what we're avoiding):
class BadPaymentService {
    processPayment(amount: number, method: string, data: any): boolean {
        if (method === 'bank') {
            const bank = new BankPayment();
            return bank.processPayment(amount, data.accountNumber);
        } else if (method === 'stripe') {
            const stripe = new StripePayment();
            const result = stripe.charge(amount, data.token);
            return result.success;
        } else if (method === 'paypal') {
            const paypal = new PayPalPayment();
            try {
                const txId = paypal.executePayment({ amount, email: data.email });
                return txId !== null;
            } catch (error) {
                return false;
            }
        }
        return false;
    }
}