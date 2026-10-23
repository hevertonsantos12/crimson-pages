import c1 from '@/assets/cover-1.jpg';
import c2 from '@/assets/cover-2.jpg';
import c3 from '@/assets/cover-3.jpg';
import c4 from '@/assets/cover-4.jpg';
import c5 from '@/assets/cover-5.jpg';
import c6 from '@/assets/cover-6.jpg';
import t1 from '@/assets/trend-1.jpg';
import t2 from '@/assets/trend-2.jpg';
import t3 from '@/assets/trend-3.jpg';
import t4 from '@/assets/trend-4.jpg';
import t5 from '@/assets/trend-5.jpg';
import t6 from '@/assets/trend-6.jpg';
import t7 from '@/assets/trend-7.jpg';
import t8 from '@/assets/trend-8.jpg';
import t9 from '@/assets/trend-9.jpg';
import t10 from '@/assets/trend-10.jpg';
export interface Manga { title: string; cover: string; rating: number; chapters: number; genre: string; isNew?: boolean; rank?: number }
export const popularManga: Manga[] = [
 {title:'One Piece',cover:c1,rating:9.5,chapters:1100,genre:'Aventura',isNew:true},
 {title:'Naruto',cover:c2,rating:9.2,chapters:700,genre:'Ação'},
 {title:'Attack on Titan',cover:c3,rating:9.4,chapters:139,genre:'Drama'},
 {title:'My Hero Academia',cover:c4,rating:8.9,chapters:420,genre:'Ação',isNew:true},
 {title:'Tokyo Ghoul',cover:c5,rating:8.7,chapters:179,genre:'Horror'},
 {title:'Death Note',cover:c6,rating:9.3,chapters:108,genre:'Thriller'},
];
export const trendingManga: Manga[] = [
 {title:'Chainsaw Man',cover:t1,rating:9.1,chapters:165,genre:'Ação'},
 {title:'Spy x Family',cover:t2,rating:9,chapters:95,genre:'Comédia'},
 {title:'Kaiju No. 8',cover:t3,rating:8.8,chapters:105,genre:'Ação'},
 {title:'Blue Lock',cover:t4,rating:8.9,chapters:255,genre:'Esportes'},
 {title:'Oshi no Ko',cover:t5,rating:9.2,chapters:145,genre:'Drama'},
 {title:'Dandadan',cover:t6,rating:8.7,chapters:135,genre:'Sobrenatural'},
 {title:'Sakamoto Days',cover:t7,rating:8.6,chapters:150,genre:'Ação'},
 {title:"Hell’s Paradise",cover:t8,rating:8.8,chapters:127,genre:'Aventura'},
 {title:'Mashle',cover:t9,rating:8.5,chapters:162,genre:'Comédia'},
 {title:'Undead Unluck',cover:t10,rating:8.4,chapters:190,genre:'Ação'},
].map((m,i)=>({...m,rank:i+1}));
export const catalog = [...popularManga,...trendingManga];
export const genres = ['Todos','Ação','Aventura','Comédia','Drama','Fantasia','Horror','Romance','Sci-Fi','Esportes','Sobrenatural','Thriller'];
export const communityTabs = ['autores','designers','artes','noticias','databook'];
export function resolveCommunityTab(value: string | null) { return value && communityTabs.includes(value) ? value : 'autores'; }
export function filterCatalog(query: string, genre: string) {
 return catalog.filter(m=>m.title.toLocaleLowerCase().includes(query.trim().toLocaleLowerCase()) && (!genre || genre==='Todos' || m.genre===genre));
}
