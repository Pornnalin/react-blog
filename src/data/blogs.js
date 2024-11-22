const blogs = [
  {
    id: 1,
    title: "รู้จักกับส้มตำไทย",
    image_url:
      "https://cdn.pixabay.com/photo/2016/10/25/13/28/papaya-salad-1768888_960_720.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa placerat duis ultricies lacus. Arcu cursus euismod quis viverra nibh cras pulvinar. Aenean et tortor at risus. Lorem donec massa sapien faucibus et molestie ac feugiat. Elit at imperdiet dui accumsan sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis. Est placerat in egestas erat imperdiet sed euismod nisi. Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Neque convallis a cras semper auctor. Sapien nec sagittis aliquam malesuada bibendum. Scelerisque mauris pellentesque pulvinar pellentesque habitant. Et malesuada fames ac turpis egestas integer eget aliquet.",
    author: "หมุนวน",
  },
  {
    id: 2,
    title: "ข้าวต้มมัด",
    image_url:
      "https://cdn.pixabay.com/photo/2017/06/06/09/27/bananas-with-sticky-rice-2376740_960_720.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa placerat duis ultricies lacus. Arcu cursus euismod quis viverra nibh cras pulvinar. Aenean et tortor at risus. Lorem donec massa sapien faucibus et molestie ac feugiat. Elit at imperdiet dui accumsan sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis. Est placerat in egestas erat imperdiet sed euismod nisi. Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Neque convallis a cras semper auctor. Sapien nec sagittis aliquam malesuada bibendum. Scelerisque mauris pellentesque pulvinar pellentesque habitant. Et malesuada fames ac turpis egestas integer eget aliquet.",
    author: "โจโจ้",
  },
  {
    id: 3,
    title: "ยำทะเล",
    image_url:
      "https://cdn.pixabay.com/photo/2019/09/15/08/06/thaifood-4477570_960_720.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa placerat duis ultricies lacus. Arcu cursus euismod quis viverra nibh cras pulvinar. Aenean et tortor at risus. Lorem donec massa sapien faucibus et molestie ac feugiat. Elit at imperdiet dui accumsan sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis. Est placerat in egestas erat imperdiet sed euismod nisi. Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Neque convallis a cras semper auctor. Sapien nec sagittis aliquam malesuada bibendum. Scelerisque mauris pellentesque pulvinar pellentesque habitant. Et malesuada fames ac turpis egestas integer eget aliquet.",
    author: "เดินเท้า",
  },
  {
    id: 4,
    title: "พระอาทิตย์ตกดิน",
    image_url:
      "https://cdn.pixabay.com/photo/2016/11/23/15/14/beach-1853442_960_720.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa placerat duis ultricies lacus. Arcu cursus euismod quis viverra nibh cras pulvinar. Aenean et tortor at risus. Lorem donec massa sapien faucibus et molestie ac feugiat. Elit at imperdiet dui accumsan sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis. Est placerat in egestas erat imperdiet sed euismod nisi. Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Neque convallis a cras semper auctor. Sapien nec sagittis aliquam malesuada bibendum. Scelerisque mauris pellentesque pulvinar pellentesque habitant. Et malesuada fames ac turpis egestas integer eget aliquet.",
    author: "นักเขียนอิสระ",
  },
  {
    id: 5,
    title: "ลาบหมู อาหารพื้นบ้านรสจัดจ้าน",
    image_url:
      "https://www.ajinomoto.co.th/storage/photos/shares/Recipe/Menu/3-05lapmoosab/61a8ed79dee45.jpeg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa placerat duis ultricies lacus. Arcu cursus euismod quis viverra nibh cras pulvinar. Aenean et tortor at risus. Lorem donec massa sapien faucibus et molestie ac feugiat. Elit at imperdiet dui accumsan sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis. Est placerat in egestas erat imperdiet sed euismod nisi. Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Neque convallis a cras semper auctor. Sapien nec sagittis aliquam malesuada bibendum. Scelerisque mauris pellentesque pulvinar pellentesque habitant. Et malesuada fames ac turpis egestas integer eget aliquet.",
    author: "แม่ครัวไทย",
  },
  {
    id: 6,
    title: "ไอศกรีมมะพร้าวสด",
    image_url:
      "https://s359.kapook.com/pagebuilder/f348d4ac-f6a5-41e0-b61b-e2113b3b2f40.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa placerat duis ultricies lacus. Arcu cursus euismod quis viverra nibh cras pulvinar. Aenean et tortor at risus. Lorem donec massa sapien faucibus et molestie ac feugiat. Elit at imperdiet dui accumsan sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis. Est placerat in egestas erat imperdiet sed euismod nisi. Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Neque convallis a cras semper auctor. Sapien nec sagittis aliquam malesuada bibendum. Scelerisque mauris pellentesque pulvinar pellentesque habitant. Et malesuada fames ac turpis egestas integer eget aliquet.",
    author: "นักทำขนมหวาน",
  },
  {
    id: 7,
    title: "กาแฟดริปแบบโฮมเมด",
    image_url:
      "https://www.aromathailand.com/wp-content/uploads/2023/04/Content-photo-drip-coffee-1-scaled.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa placerat duis ultricies lacus. Arcu cursus euismod quis viverra nibh cras pulvinar. Aenean et tortor at risus. Lorem donec massa sapien faucibus et molestie ac feugiat. Elit at imperdiet dui accumsan sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis. Est placerat in egestas erat imperdiet sed euismod nisi. Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Neque convallis a cras semper auctor. Sapien nec sagittis aliquam malesuada bibendum. Scelerisque mauris pellentesque pulvinar pellentesque habitant. Et malesuada fames ac turpis egestas integer eget aliquet.",
    author: "คอกาแฟ",
  },
];
export default blogs;
