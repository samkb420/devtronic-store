import UserPanel from 'Container/UserPanel';
/* eslint-disable */

const HomeV1 = () => import('Views/HomeV1');
const HomeV2 = () => import('Views/HomeV2');
const HomeV3 = () => import('Views/HomeV3');
const Gadget = () => import('Views/Gadget');
const Product = () => import('Views/Product');
const Payment = () => import('Views/Payment/Payment');
const Cart = () => import('Views/Cart');
const Checkout = () => import('Views/Checkout');
const FinalReceipt = () => import('Views/FinalReceipt');
const ProductDetail = () => import('Views/ProductDetail');
const AboutUs = () => import('Views/AboutUs');
const TermCondiition = () => import('Views/TermsAndCondition');
const Faq = () => import('Views/Faq');
const Account = () => import('Views/UserAccount/Account.vue');
const OrderHistory = () => import('Views/UserAccount/OrderHistory.vue');
const Profile = () => import('Views/UserAccount/Profile.vue');
const EditProfile = () => import ('Views/UserAccount/EditProfile.vue');
const EditProfileInfo = () => import ('Views/UserAccount/EditProfileInfo.vue');
const BlogDetail = () => import('Views/Blogs/BlogDetails');
const ContactUs = () => import('Views/Contact');
const PrivacyPolicy = () => import('Views/PrivacyPolicy');
const Register = () => import('Views/Sessions/Register');
const ForgotPassword = () => import('Views/Sessions/ForgotPassword');
const ThankYou = () => import('Views/Sessions/ThankYou');
const SignIn = () => import('Views/Sessions/SignIn');


export default {
	path: '/',
	component: UserPanel,
	redirect:'/home',
	children:[
		{ 
			path: '/home',
			component: HomeV3 ,
			meta: {
				header: 1
			 }
		},
		{ 
			path: '/home-two',
			component: HomeV2 ,
			meta: {
				header: 2
			}
		},
		{ 
			path: '/home-three',
			component: HomeV3 ,
			meta: {
				header: 3
			}
		},
		{ 
			path: '/gadget',
			component: Gadget 
		},
		{			
			path: '/products/:category/:subcategory?',
			component: Product,
			name: 'Products'
		},
		{ 
			path: '/checkout/payment',
			component: Payment 
		},
		{ 
			path: '/cart',
			component: Cart,
			name: 'cart'
		},
		{ 
			path: '/checkout',
			component: Checkout,
			name: 'checkout',
			meta: {
				authRequired: true
			}
		},
		{ 
			path: '/products/:id/details',
			component: ProductDetail, 
			name:'productDetail'
		},
		{ 
			path: '/checkout/final-receipt',  
			component: FinalReceipt, 
			name:'FinalReceipt'
		},
		{ 
			path: '/about',  
			component: AboutUs, 
			name:'about'
		},
		{ 
			path: '/term-condition',  
			component: TermCondiition, 
			name:'term-condition'
		},
		{ 
			path: '/faq',  
			component: Faq, 
			name:'Faq'
		},
		{ 
			path: '/account',  
			component: Account, 
			name:'Account',
			children: [
            {
					path: '/account/order-history',name:'OrderHistory',component: OrderHistory,
				},
				{
					path: '/account/profile',name:'Profile',component: Profile,
				},
				{
					path: '/account/profile/edit',name:'EditProfile',component: EditProfile
				},
				{
					path: '/account/profile/edit',name:'EditProfileInfo',component: EditProfileInfo,
				},
        ]
		},
		{ 
			path: '/blog-detail/:id',  
			component: BlogDetail, 
			name:'BlogDetail;'
		},
		{ 
			path: '/contact',  
			component: ContactUs, 
			name:'ContactUs'
		},

		{ 
			path: '/privacy-policy',  
			component: PrivacyPolicy, 
			name:'PrivacyPolicy'
		},
		{ 
			path: '/session/signup',  
			component: Register, 
			name:'Register'
		},
		{ 
			path: '/session/forgot-password',  
			component: ForgotPassword, 
			name:'ForgotPassword'
		},
		{ 
			path: '/session/thank-you',  
			component: ThankYou, 
			name:'ThankYou'
		},
		{ 
			path: '/session/signin',  
			component: SignIn, 
			name:'SignIn'
		}
	]
}