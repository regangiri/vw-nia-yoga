import { createClient } from '@/utils/supabase/client';

const supabase = createClient();
export const getGuestData = async () => {
  try {
    const { data, error, status } = await supabase
      .from('guestbook_yogania')
      .select(`name,message`)
      .order('created_at', { ascending: false });

    if (error && status !== 406) {
      throw error;
    }

    if (data) {
      return data;
    }
  } catch (error: any) {
    alert(error.message);
  }
};

export const sendMessage = async ({
  name,
  message,
}: {
  name: any;
  message: any;
}) => {
  try {
    const addGuest = {
      name,
      message,
      created_at: new Date(),
    };

    const { error } = await supabase
      .from('guestbook_yogania')
      .insert([addGuest]);

    if (error) {
      throw error;
    }
  } catch (error: any) {
    alert(error.message);
  }
};

export const addRSVP = async (
  name: string,
  telephone: string,
  total_guest: number,
  confirmation: any
) => {
  try {
    const addGuest = {
      name,
      telephone,
      total_guest,
      confirmation,
      created_at: new Date(),
    };

    const { error } = await supabase
      .from('rsvp_kelvinsherrish_matrimony')
      .insert(addGuest);

    if (error) {
      throw error;
    }
  } catch (error: any) {
    alert(error.message);
  }
};
export const addRSVPReception = async (
  name: string,
  telephone: string,
  total_guest: number,
  confirmation: any
) => {
  try {
    const addGuest = {
      name,
      telephone,
      total_guest,
      confirmation,
      created_at: new Date(),
    };

    const { error } = await supabase
      .from('rsvp_kelvinsherrish_reception')
      .insert(addGuest);

    if (error) {
      throw error;
    }
  } catch (error: any) {
    alert(error.message);
  }
};
