import {supabase} from './supabase';
import { PhotoProps } from '../components/album/Album';

interface PhotoData {
  name: string;
  datetime: string;
  address: string;
  photo_key: string;
}

const fetchPhotoUrl = async (photoKey: string): Promise<string> => {
  const {data} = await supabase.storage.from('photos').getPublicUrl(photoKey);
  return data.publicUrl;
}

const toProps = (data: PhotoData, publicUrl: string): PhotoProps => {
  return {
    name: data.name,
    datetime: new Date(data.datetime),
    address: data.address,
    url: publicUrl,
  };
}

export const fetchPhotoData = async (offsetNum: number): Promise<PhotoProps[]> => {
  const {data, error} = await supabase.rpc('list_photos', {'offset_num': offsetNum});

  if (error) {
    console.error('Error fetching photos:', error);
    return [];
  }
  const photoData = data as PhotoData[];

  const photoProps = await Promise.all(photoData.map(async (data) => {
    const publicUrl = await fetchPhotoUrl(data.photo_key);
    return toProps(data, publicUrl);
  }));

  return photoProps;
}