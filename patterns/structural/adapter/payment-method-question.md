# Payment Method Integration - Adapter Pattern

## Scenario

You're working at an e-commerce company that has been using a legacy payment system for years. The company now wants to integrate multiple modern payment providers (Stripe, PayPal, Square) while keeping the existing bank payment system operational. However, each payment provider has different method signatures and interfaces.

## Given Code

```typescript
// Legacy system
class BankPayment {
  processPayment(amount: number, accountNumber: string): boolean {
    // Legacy bank processing logic
    return true;
  }
}

// New payment providers
class StripePayment {
  charge(
    amount: number,
    token: string
  ): { success: boolean; transactionId: string } {
    // Stripe API call
    return { success: true, transactionId: "stripe_123" };
  }
}

class PayPalPayment {
  executePayment(paymentData: { amount: number; email: string }): string {
    // PayPal API call
    return "paypal_transaction_456";
  }
}
```

## Interview Questions

### Part 1: Design Pattern Identification (5 minutes)

- What design pattern would you use to solve this integration problem and why?
- What are the key benefits of using this pattern in this scenario?

### Part 2: Implementation (15 minutes)

Design and implement a solution that allows the e-commerce system to:

- Use all payment methods through a unified interface
- Add new payment providers easily in the future
- Process payments by specifying the provider name
- Handle errors gracefully when a payment method fails

### Part 3: Advanced Scenarios (10 minutes)

How would you extend your solution to handle:

- Async operations (some payment providers return Promises)
- Different response formats (success/failure, transaction IDs, error messages)
- Payment method validation (checking if a method supports certain features like refunds)

### Code Review Question

A junior developer suggests this alternative approach:

```typescript
class PaymentService {
  processPayment(amount: number, method: string) {
    if (method === "bank") {
      // bank logic
    } else if (method === "stripe") {
      // stripe logic
    } else if (method === "paypal") {
      // paypal logic
    }
  }
}
```

**What are the problems with this approach? How does your solution address these issues?**

### Part 4: System Design (10 minutes)

In a microservices architecture, how would you structure this payment system? Consider:

- Service boundaries
- Error handling and retries
- Payment method discovery
- Transaction logging and auditing

## Expected Answer Framework

- **Pattern Recognition**: Adapter Pattern identification
- **Clean Code**: Proper interfaces, separation of concerns
- **Extensibility**: Easy to add new payment methods
- **Error Handling**: Graceful failure management
- **Architecture**: Understanding of SOLID principles and scalability

## Follow-up Questions

- "How would you test this system?"
- "What if we needed to support payment method chaining (try Stripe, fallback to PayPal)?"
- "How would you handle payment method configuration (API keys, endpoints)?"

---

**Note**: This question tests multiple skills: design patterns, problem-solving, code architecture, and real-world application of theoretical concepts.
