/* eslint-disable */
// Sidebar Routers
export const menus = [
   {
      path: '/products/servers',
      name: "servers",
      icon: "home",
      type: "sub_menu",
      children: [
          { name: "All in One, Desktops & workstations", children_menus:null, path: "/products/servers/all-in-one-desktops-workstations" },
          { name: "Notebooks / Laptops", children_menus:null, path: "/products/servers/notebooks-laptops" },
          { name: "Tablet PCs", children_menus:null, path: "/products/servers/tablet-pcs" },
          { name: "Notebook & Tablet Accessories", children_menus:null, path: "/products/servers/notebook-tablet-accessories" },
      ]
  }, {
      path: '/products/networking',
      name: "networking",
      icon: "home",
      type: "sub_menu",
      children: [
          { name: "Pagers", children_menus:null, path: "/products/networking/pagers" },
          { name: "PCMCIA Cards", children_menus:null, path: "/products/networking/pcmcia-cards" },
          { name: "Connectors & components", children_menus:null, path: "/products/networking/connectors-components" },
          { name: "Print Servers", children_menus:null, path: "/products/networking/print-servers" },
          { name: "Internet Gateways", children_menus:null, path: "/products/networking/internet-gateways" },
          { name: "Fax/Modems", children_menus:null, path: "/products/networking/fax-modems" },
          { name: "Tranceivers & Modules", children_menus:null, path: "/products/networking/tranceivers-modules" },
          { name: "VOIP Products", children_menus:null, path: "/products/networking/voip-products" },
          { name: "Wirelesss products", children_menus:null, path: "/products/networking/wirelesss-products" },
          { name: "Networking Cable", children_menus:null, path: "/products/networking/networking-cable" },
          { name: "Redundant Power Supply", children_menus:null, path: "/products/networking/redundant-power-supply" },
          { name: "2 Way Radios", children_menus:null, path: "/products/networking/2-way-radios" },
          { name: "Switches & Hubs", children_menus:null, path: "/products/networking/switches-hubs" },
          { name: "Gigabit", children_menus:null, path: "/products/networking/gigabit" },
          { name: "ADSL/Cable Modems", children_menus:null, path: "/products/networking/adsl-cable-modems" },
          { name: "Access Point", children_menus:null, path: "/products/networking/access-point" },
          { name: "Network Adapters", children_menus:null, path: "/products/networking/network-adapters" },
          { name: "Firewalls", children_menus:null, path: "/products/networking/firewalls" },
          { name: "Network Management Software", children_menus:null, path: "/products/networking/network-management-software" },
          { name: "Analog & Digital Telephones", children_menus:null, path: "/products/networking/analog-digital-telephones" },
          { name: "PABX & Telephone Accessories", children_menus:null, path: "/products/networking/pabx-telephone-accessories" },
          { name: "Cabinets & Racks", children_menus:null, path: "/products/networking/cabinets-racks" },
          { name: "Routers", children_menus:null, path: "/products/networking/routers" },
      ]
  }, {
      path: '/products/storage',
      name: "storage",
      icon: "home",
      type: "sub_menu",
      children: [
          { name: "Monitors", children_menus:null, path: "/products/storage/monitors" },
          { name: "Hard Drives", children_menus:null, path: "/products/storage/hard-drives" },
          { name: "Memory", children_menus:null, path: "/products/storage/memory" },
          { name: "Tape/Data Storage Drives", children_menus:null, path: "/products/storage/tape-data-storage-drives" },
          { name: "Duplicators", children_menus:null, path: "/products/storage/duplicators" },
          { name: "CPU", children_menus:null, path: "/products/storage/cpu" },
          { name: "Motherboards", children_menus:null, path: "/products/storage/motherboards" },
          { name: "Controller Cards", children_menus:null, path: "/products/storage/controller-cards" },
          { name: "Sound Cards", children_menus:null, path: "/products/storage/sound-cards" },
          { name: "VGA Cards", children_menus:null, path: "/products/storage/vga-cards" },
          { name: "Power Supply Units", children_menus:null, path: "/products/storage/power-supply-units" },
          { name: "External HDD", children_menus:null, path: "/products/storage/external-hdd" },
          { name: "DVD Writers", children_menus:null, path: "/products/storage/dvd-writers" },
          { name: "DVD Drives", children_menus:null, path: "/products/storage/dvd-drives" },
          { name: "Floppy Drives", children_menus:null, path: "/products/storage/floppy-drives" },
          { name: "NAS Network Attached Storage", children_menus:null, path: "/products/storage/nas-network-attached-storage" },
          { name: "SCSI cards", children_menus:null, path: "/products/storage/scsi-cards" },
          { name: "USB Drives", children_menus:null, path: "/products/storage/usb-drives" },
          { name: "PCI cards", children_menus:null, path: "/products/storage/pci-cards" },
          { name: "Memory Cards & Readers", children_menus:null, path: "/products/storage/memory-cards-readers" },
          { name: "Keyboards", children_menus:null, path: "/products/storage/keyboards" },
          { name: "Mice/Pointing Device", children_menus:null, path: "/products/storage/mice-pointing-device" },
          { name: "Joystick", children_menus:null, path: "/products/storage/joystick" },
          { name: "Combo Drives", children_menus:null, path: "/products/storage/combo-drives" },
          { name: "Headset/ Microphones", children_menus:null, path: "/products/storage/headset-microphones" },
          { name: "TV Tuner Cards", children_menus:null, path: "/products/storage/tv-tuner-cards" },
  
      ]
  }, {
      path: '/products/electronics',
      name: "electronics",
      icon: "home",
      type: "sub_menu",
      children: [
          { name: "Electonic Components & Accessories", children_menus:null, path: "/products/electronics/electonic-components-accessories" },
          { name: "Digital/Normal Cameras", children_menus:null, path: "/products/electronics/digital-normal-cameras" },
          { name: "Projectors", children_menus:null, path: "/products/electronics/projectors" },
          { name: "Digital Video Products", children_menus:null, path: "/products/electronics/digital-video-products" },
          { name: "Mobile phones", children_menus:null, path: "/products/electronics/mobile-phones" },
          { name: "Global Position Systems ", children_menus:null, path: "/products/electronics/global-position-systems-" },
          { name: "Video Game Console", children_menus:null, path: "/products/electronics/video-game-console" },
          { name: "Video Cameras", children_menus:null, path: "/products/electronics/video-cameras" },
          { name: "Entertainment & Gaming", children_menus:null, path: "/products/electronics/entertainment-gaming" },
          { name: "Plasma", children_menus:null, path: "/products/electronics/plasma" },
          { name: "Projector Screens & Accessories", children_menus:null, path: "/products/electronics/projector-screens-accessories" },
          { name: "Web Cameras", children_menus:null, path: "/products/electronics/web-cameras" },
          { name: "Mobile Phone Accessories", children_menus:null, path: "/products/electronics/mobile-phone-accessories" },
          { name: "Home Theatre System", children_menus:null, path: "/products/electronics/home-theatre-system" },
          { name: "DVD Players", children_menus:null, path: "/products/electronics/dvd-players" },
          { name: "Blueray", children_menus:null, path: "/products/electronics/blueray" },
          { name: "LED/LCD TVs", children_menus:null, path: "/products/electronics/led-lcd-tvs" },
          { name: "MP3/MP4/Ipod Players & Accessories", children_menus:null, path: "/products/electronics/mp3-mp4-ipod-players-accessories" },
          { name: "Security Cameras", children_menus:null, path: "/products/electronics/security-cameras" },
          { name: "Speakers", children_menus:null, path: "/products/electronics/speakers" },
  
      ]
  }, {
      path: '/products/printers',
      name: "printers",
      icon: "home",
      type: "sub_menu",
      children: [
          { name: "Scanner & Fax Copier,  Printer Parts", children_menus:null, path: "/products/scanner-fax-copier-printer-parts" },
          { name: "Scanners", children_menus:null, path: "/products/scanners" },
          { name: "Receipt Printers", children_menus:null, path: "/products/receipt-printers" },
          { name: "Mobile Printers", children_menus:null, path: "/products/mobile-printers" },
          { name: "Deskjet Printers", children_menus:null, path: "/products/deskjet-printers" },
          { name: "ID card Printers", children_menus:null, path: "/products/id-card-printers" },
          { name: "Photosmart Printers", children_menus:null, path: "/products/photosmart-printers" },
          { name: "NIP Printers", children_menus:null, path: "/products/nip-printers" },
          { name: "Thermal Printers", children_menus:null, path: "/products/thermal-printers" },
          { name: "Dotmatrix Printers", children_menus:null, path: "/products/dotmatrix-printers" },
          { name: "Plotters", children_menus:null, path: "/products/plotters" },
          { name: "All In One Printers", children_menus:null, path: "/products/all-in-one-printers" },
          { name: "Laser Printers", children_menus:null, path: "/products/laser-printers" },
  
      ]
  }, {
      path: '/products/accessories',
      name: "accessories",
      icon: "home",
      type: "sub_menu",
      children: [
          { name: "VGA Cables", children_menus:null, path: "/products/accessories/vga-cables" },
          { name: "Mouse Pads", children_menus:null, path: "/products/accessories/mouse-pads" },
          { name: "Mount Kit", children_menus:null, path: "/products/accessories/mount-kit" },
          { name: "Power Cords", children_menus:null, path: "/products/accessories/power-cords" },
          { name: "Cable Organisers", children_menus:null, path: "/products/accessories/cable-organisers" },
          { name: "CD/Disk Storage", children_menus:null, path: "/products/accessories/cd-disk-storage" },
          { name: "Laplink Cables", children_menus:null, path: "/products/accessories/laplink-cables" },
          { name: "Modem Cables", children_menus:null, path: "/products/accessories/modem-cables" },
          { name: "Fiber Optic Cables", children_menus:null, path: "/products/accessories/fiber-optic-cables" },
          { name: "Networking Cables", children_menus:null, path: "/products/accessories/networking-cables" },
          { name: "Tool Kit", children_menus:null, path: "/products/accessories/tool-kit" },
          { name: "Data/ KVM Switches", children_menus:null, path: "/products/accessories/data-kvm-switches" },
          { name: "USB Cables", children_menus:null, path: "/products/accessories/usb-cables" },
          { name: "Firewire Cables", children_menus:null, path: "/products/accessories/firewire-cables" },
          { name: "Serial Cables", children_menus:null, path: "/products/accessories/serial-cables" },
          { name: "Audio Video Cables", children_menus:null, path: "/products/accessories/audio-video-cables" },
          { name: "Power Cables", children_menus:null, path: "/products/accessories/power-cables" },
          { name: "Keyboard Connectivity", children_menus:null, path: "/products/accessories/keyboard-connectivity" },
          { name: "Dust Covers", children_menus:null, path: "/products/accessories/dust-covers" },
          { name: "Monitor/UPS Cables", children_menus:null, path: "/products/accessories/monitor-ups-cables" },
          { name: "Printer Cables", children_menus:null, path: "/products/accessories/printer-cables" },
  
      ]
  }, {
      path: '/products/supplies',
      name: "supplies",
      icon: "home",
      type: "sub_menu",
      children: [
          { name: "Paper", children_menus:null, path: "/products/supplies/paper" },
          { name: "Data storage/Disk", children_menus:null, path: "/products/supplies/data-storage-disk" },
          { name: "Ribbons", children_menus:null, path: "/products/supplies/ribbons" },
          { name: "Toner Cartridges", children_menus:null, path: "/products/supplies/toner-cartridges" },
          { name: "Data/Tape Cartrdges", children_menus:null, path: "/products/supplies/data-tape-cartrdges" },
          { name: "Ink Cartridges", children_menus:null, path: "/products/supplies/ink-cartridges" },
  
      ]
  }, {
      path: '/products/office-products',
      name: "office-products",
      icon: "home",
      type: "sub_menu",
      children: [
          { name: "Binding Products", children_menus:null, path: "/products/office-products/binding-products" },
          { name: "SAFES", children_menus:null, path: "/products/office-products/safes" },
          { name: "Cash Drawers", children_menus:null, path: "/products/office-products/cash-drawers" },
          { name: "Barcode Label Printers", children_menus:null, path: "/products/office-products/barcode-label-printers" },
          { name: "Scanner & Fax, Copier", children_menus:null, path: "/products/office-products/scanner-fax-copier" },
          { name: "Shredders", children_menus:null, path: "/products/office-products/shredders" },
          { name: "POS Keyboards", children_menus:null, path: "/products/office-products/pos-keyboards" },
          { name: "Laminators", children_menus:null, path: "/products/office-products/laminators" },
          { name: "POS Accessories", children_menus:null, path: "/products/office-products/pos-accessories" },
      ]
  }, {
      path: '/products/software',
      name: "software",
      icon: "home",
      type: "perm_identity",
      children: null
  }, {
      path: '/products/power-ups',
      name: "power-ups",
      icon: "home",
      type: "perm_identity",
      children: null
  }
]


export const adminPanelMenus = [
	{
      path: '/admin-panel/reports',
      name:"message.reports",
      icon: 'poll',
      children:null,
		active: true
   },
   {
      path: '/admin-panel/invoices',
      name:"message.invoices",
      icon: 'recent_actors',
      children:null,
		active: false
   },
   {
      path: '/products/essage-products',
      name:"message-products",
      icon: 'shopping_cart',
		active: false,
      children: [
			{
				name: "message.products",
				path: "/admin-panel/products"
			},
			{
				name: "message.productAdd",
				path: "/admin-panel/product-add"
         },
      ]
      
   },
   {
      path: '/admin-panel/account/profile',
      name:"message.profile",
      icon: 'account_circle',
		active: false,
      children: null
   },
   {
      path: '/home',
      name:"message.goToSite",
      icon: 'home',
		active: false,
      children: null
   },
]