import m_moment from 'moment';
import m_momentDurationFormatSetup from 'moment-duration-format';

m_momentDurationFormatSetup(m_moment as any);

export const moment = m_moment;
