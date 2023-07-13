const question = [
  {
    question: 'What is Luxim, and how does it work?',
    answer:
      'We are an e-commerce platform that enables customers to buy and sell high-quality new or pre-owned traditional clothes at affordable prices in Nigeria.We are the nexus between heritage and sustainability, where buyers can browse and purchase items securely, while sellers can upload and sell their items with ease.',
  },
  // {
  //   question: 'How do I create an account?',
  //   answer:
  //     'Please click on link and you will be directed to the app store LINK',
  // },
  {
    question: 'How does Luxim promote sustainable fashion practices?',
    answer:
      'Our focus is on reducing the negative impact of the fashion industry on the environment by promoting sustainable fashion practices. By providing a marketplace for pre-owned traditional fashion items, Luxim encourages circular fashion and reduces waste.',
  },
  {
    question: 'Who are Luxim customers?',
    answer:
      'Our customers are fashion enthusiasts in Nigeria who are interested in buying and selling new and pre-loved traditional clothes. We reach people who are more environmentally conscious and prefer affordable and unique fashion options over mainstream fast-fashion.',
  },
  {
    question: 'Where does Luxim operate?',
    answer:
      'Luxim is headquartered in Lagos, Nigeria. We only process and deliver purchases in Lagos for now. But, no vex! We are expanding soon! Make sure you subscribe to our emails or follow us on social media for alerts on our next location.',
  },
  {
    question: 'What are the benefits of selling on Luxim? ',
    answer:
      'On Luxim you reach a wide audience of people interested in shopping your looks! Typically selling your clothes on other social media apps only allows you to reach your followers. On Luxim, we share your wardrobe with people across our community to boost your sales! We also manage logistics and payments so you don’t have to! ',
  },
  {
    question: 'How can I become a seller on Luxim?',
    answer:
      'It’s simple! To become a seller on Luxim, you need to download the mobile app on the App Store or Play store and register as a seller. In less than 60 seconds, upload clear pictures of your items, set prices and post them to the marketplace! Now just sit back and wait for buyers to make purchases.',
  },
  {
    question: 'What is Luxim’s Seller Fee Policy?',
    answer:
      'Listing on Luxim is always free! After your item sells, we deduct a small fee from the final order price. For sales under N2000, the fee is a flat rate of N400. For sales above N2000, the fee is 16% and you keep 84%. This is how we maintain the cost of operations to provide our customers with a  safe and convenient retail experience.',
  },
  // {
  //   question: 'How do I buy on Luxim? ',
  //   answer:
  //     'Click the link (imbed the link here) and create an account in 60 seconds or less  and begin shopping on Luxim ',
  // },
  {
    question: 'What are the benefits of buying on Luxim? ',
    answer: `We make buying pre-owned fashion easy and secure! If you receive an item that arrives below our Standards, please email our team at <a href="mailto:hello@luximapp.com" style="font-weight: 800">hello@luximapp.com</a> within 24 hours of purchase delivery and we will aim to provide an amicable resolution.

            Shopping for preloved fashion is a sustainable and cost-effective way of shopping that can offer unique finds and reduce your impact on the environment.
            `,
  },
  {
    question: 'Is Luxim a secure platform?',
    answer:
      'Yes, Luxim is a secure platform. We partner with Paystack to ensure secure and convenient payment options for users.',
  },
  {
    question:
      'How can I be sure of the quality of the items I purchase on Luxim?',
    answer:
      'Luxim promotes high-quality new or pre-owned traditional clothes. We encourage sellers to ensure that all items uploaded for sale are in good condition before they are listed on the platform. If you receive an item that arrives below our Standards, please email our team at <a href="mailto:hello@luximapp.com" style="font-weight: 800">hello@luximapp.com</a> and we will aim to provide an amicable resolution.',
  },
  {
    question:
      'How does Luxim ensure the authenticity of the items listed on the platform?',
    answer:
      'Luxim cannot guarantee the authenticity of items on our marketplace. We encourage you to use your discretion when completing your purchase. We require identification verification for all sellers before they list on our marketplace which ensures only real people are selling on Luxim but we cannot guarantee the authenticity of items listed and sold.',
  },
  {
    question: 'Can I negotiate prices with sellers on Luxim?',
    answer:
      'Sometimes, you can negotiate prices with sellers on Luxim. This is only if they have enabled this feature when listing the item.',
  },
  {
    question: 'How do I pay for items I purchase on Luxim?',
    answer:
      'You can pay for items you purchase on Luxim using any of the secure payment options available on the platform, including debit and credit cards or bank transfer. We process payments through Paystack to ensure secure and seamless transactions. ',
  },
  {
    question: 'Can I check out items from multiple sellers in my cart?',
    answer:
      'Yes, you can check out items from multiple sellers at once. Although items purchased from different sellers will have varying shipping costs and delivery times.',
  },
  {
    question: `How long does it take for items to be delivered after purchase?
        `,
    answer:
      "Delivery times may vary depending on your location and the seller's location. Luxim partners with RedStar, our preferred logistics partner, to ensure fast and reliable delivery of purchases in 3-5 working days. First, your seller will package your items, then Redstar will pick up the package and deliver it to your doorstep.",
  },
  {
    question: 'How do I track my order on Luxim?',
    answer:
      'You can track your order on Luxim by checking the order status on the app. We will send you notifications at every stage of the delivery process.',
  },
  {
    question: `Can I return items purchased on Luxim?
        `,
    answer: 'No, unfortunately you cannot return purchased items back to the seller. If your new item doesn\'t fit your wardrobe, we encourage you to style it and list it back on Luxim so it can find a new home! If you receive an item that arrives below our Standards, please email our team at <a href="mailto:hello@luximapp.com" style="font-weight: 800">hello@luximapp.com</a> and we will resolve the issue to your satisfaction, no questions asked.',
  },
  {
    question: 'How long does it take for Luxim to refund my purchase? ',
    answer:
      'Refunds are processed 2-3 business days after the dispute has been resolved.',
  },
  {
    question:
      'What happens if I make a purchase on Luxim but change my mind before the package ships? ',
    answer:
      'Once an order has been purchased and placed, it can not be cancelled. ',
  },
  {
    question: 'Can I sell in bulk on Luxim? ',
    answer:
      'We are a marketplace to find unique styles and shop sustainably. We do not allow bulk sales on Luxim. ',
  },
  {
    question: 'Can I sell items from outside Nigeria on Luxim?',
    answer:
      'No, Luxim only allows the sale of new or pre-owned traditional clothes from Nigeria on our marketplace. ',
  },
  {
    question: 'How does Luxim handle disputes between buyers and sellers?',
    answer:
      'Luxim provides a dispute resolution system through our customer care team that allows buyers and sellers to resolve issues amicably.',
  },
  {
    question:
      'How does Luxim ensure fair pricing for items listed on the platform?',
    answer:
      'Luxim recommends guidelines for pricing items listed on the platform to ensure that they are priced fairly.The pricing guidelines take into account the condition, age, and uniqueness of the items. Of course we can only provide recommendations and listing prices are at the discretion of the seller. ',
  },
  {
    question: 'How do I get paid on Luxim?',
    answer:
      'Payout occurs within 48 hours of item delivery. Should there be a dispute from your buyer, payout will occur once the dispute has been resolved which can take up to 3-5 working days. Luxim payouts are deposited into your Luxim wallet. You can use funds in your wallet to make another purchase on the app or transfer money to your bank account.',
  },
  {
    question: 'Do you ship nationwide in Nigeria?',
    answer:
      'Currently we only ship within Lagos State. Stay tuned, we are expanding soon! Make sure you subscribe to our email <a href="mailto:hello@luximapp.com" style="font-weight: 800">hello@luximapp.com</a>  or follow us on our socials for alerts on our next location.',
  },
  {
    question: "I don't live in Lagos, can I buy and sell on Luxim? ",
    answer:
      'If you have a pick up and delivery address in Lagos, yes you can buy and sell on Luxim.',
  },
  {
    question: 'How do I contact support when I have an issue with my order?',
    answer:
      'We will be more than happy to resolve any issues with your order, please email us at <a href="mailto:support@luximapp.com" style="font-weight: 800">support@luximapp.com</a> or chat with us on the app or via whatsapp. We will respond within 1 working day.',
  },
];

export default question;
