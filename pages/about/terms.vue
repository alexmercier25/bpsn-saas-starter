<template>
  <div class="container mx-auto px-4 pt-8">
    <h1 class="text-3xl font-bold mb-4">Terms and Conditions</h1>

    <p class="mb-2 text-lg">Last Updated: {{ termsLastUpdated }}</p>

    <section id="introduction" class="my-4">
      <h2 class="text-2xl font-semibold mb-2">1. Introduction</h2>
      <p>
        Welcome to {{ productName }} ("we", "our", or "us"). This agreement
        outlines the terms and conditions ("Terms") governing the use of
        {{ productName }} services and software ("Services"). By using our
        Services, you agree to comply with and be bound by these Terms.
      </p>
    </section>

    <section id="definitions" class="my-4">
      <h2 class="text-2xl font-semibold mb-2">2. Definitions</h2>
      <ul class="list-disc list-inside">
        <li>
          "Services" refers to the functionalities and features provided by
          {{ productName }}.
        </li>
        <li>
          "User" or "you" refers to the individual or entity that uses our
          Services.
        </li>
        <li>
          "Data" refers to the information and content uploaded to our Services.
        </li>
      </ul>
    </section>

    <section id="serviceProvision" class="my-4">
      <h2 class="text-2xl font-semibold mb-2">3. Service Provision</h2>
      <p>
        We will provide the Services as described on our website. We reserve the
        right to modify, suspend, or discontinue the Services at any time.
      </p>
    </section>

    <section id="userAccounts" class="my-4">
      <h2 class="text-2xl font-semibold mb-2">4. User Accounts</h2>
      <p>
        To use our Services, you may need to create an account. You are
        responsible for safeguarding your account and are liable for all
        activities that occur under your account.
      </p>
    </section>

    <section id="data" class="my-4">
      <h2 class="text-2xl font-semibold mb-2">5. Data</h2>
      <p>
        We take the privacy of your Data seriously and will handle it in
        accordance with our <NuxtLink to="/privacy">Privacy Policy</NuxtLink>.
      </p>
    </section>

    <section id="usageRestrictions" class="my-4">
      <h2 class="text-2xl font-semibold mb-2">6. Usage Restrictions</h2>
      <p>
        You agree not to use our Services for any unlawful purposes or in a way
        that violates these Terms.
      </p>
    </section>

    <section id="paymentsAndRefunds" class="my-4">
      <h2 class="text-2xl font-semibold mb-2">7. Payments and Refunds</h2>
      <p>
        Payments for our Services are due in accordance with the payment plan
        you have chosen. We do not offer refunds except as required by law.
      </p>
    </section>

    <section id="termination" class="my-4">
      <h2 class="text-2xl font-semibold mb-2">8. Termination</h2>
      <p>
        We reserve the right to terminate your account and access to our
        Services if you violate these Terms.
      </p>
    </section>

    <section id="liabilityLimitation" class="my-4">
      <h2 class="text-2xl font-semibold mb-2">9. Liability Limitation</h2>
      <p>
        To the extent permitted by law, {{ productName }} shall not be liable
        for any indirect, special, incidental, or consequential damages under
        any circumstances.
      </p>
    </section>

    <section id="governingLaw" class="my-4">
      <h2 class="text-2xl font-semibold mb-2">10. Governing Law</h2>
      <p>These Terms shall be governed by the laws of {{ jurisdiction }}.</p>
    </section>

    <section id="termChanges" class="my-4">
      <h2 class="text-2xl font-semibold mb-2">11. Changes to Terms</h2>
      <p>
        We reserve the right to change these Terms at any time. Updated versions
        of the Terms will be posted on our website.
      </p>
    </section>

    <section id="contact" class="my-4">
      <h2 class="text-2xl font-semibold mb-2">12. Contact Us</h2>
      <p>
        For any questions about these Terms, please contact us at
        <a :href="`mailto:${supportEmail}`">{{ supportEmail }}</a>
      </p>
    </section>
  </div>
</template>

<script setup>
/**
 * This is a simplified example. Depending on your services,
 * additional clauses around API usage, data backup, service-level agreements (SLAs), or data protection might also be necessary.
 * Always consult with a legal advisor for a thorough and tailored Terms and Conditions.
 */
const { productName, supportEmail, termsLastUpdated, jurisdiction } =
  useAppConfig();
</script>
