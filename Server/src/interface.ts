export  type PlaylistItemsResponse = {
  data: {
    items: {
      id: string;
      snippet: {
        title: string;
        resourceId: {
          kind: string;
          videoId: string;
        }
      }
    }[]
  }
}

export type PlaylistItem = {
  id: string;
  snippet: {
    title: string;
    resourceId: {
      kind: string;
      videoId: string;
    }
  }
}