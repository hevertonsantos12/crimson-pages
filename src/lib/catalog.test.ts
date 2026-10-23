import { describe, it, expect } from 'vitest';
import { filterCatalog, resolveCommunityTab, communityTabs } from './catalog';
describe('Community navigation',()=>{
 it('preserves all five requested sections',()=>{expect(communityTabs).toEqual(['autores','designers','artes','noticias','databook']);});
 it('opens a valid tab and falls back for unknown tabs',()=>{expect(resolveCommunityTab('databook')).toBe('databook');expect(resolveCommunityTab('missing')).toBe('autores');});
});
describe('Catalog search',()=>{
 it('finds One Piece regardless of case or surrounding spaces',()=>{expect(filterCatalog(' ONE PIECE ','Todos').map(m=>m.title)).toEqual(['One Piece']);});
 it('combines genre and title filters',()=>{expect(filterCatalog('Naruto','Drama')).toEqual([]);expect(filterCatalog('Naruto','Ação').map(m=>m.title)).toEqual(['Naruto']);});
});
