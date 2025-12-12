/**
 * Event data processing utilities
 */

/**
 * Transform events from JSON format to normalized event objects
 * @param {Object} eventsData - Raw events data from JSON
 * @returns {Array} Array of normalized event objects
 */
export function transformEvents(eventsData) {
  return Object.entries(eventsData).map(([name, data]) => ({
    title: name,
    date: data.date,
    start_time: data.start_time,
    end_time: data.end_time,
    location: data.location,
    desc: data.description,
    oreconnect_url: data.oreconnect_url
  }))
}

/**
 * Filter events by date status
 * @param {Array} events - Array of event objects
 * @param {Function} datePredicate - Function to test if date matches criteria
 * @returns {Array} Filtered events
 */
export function filterEventsByDate(events, datePredicate) {
  return events.filter(e => datePredicate(e.date))
}

/**
 * Generate initials from a person's name
 * @param {string} name - Full name
 * @returns {string} Initials (e.g., "John Doe" -> "JD")
 */
export function getInitials(name) {
  return name.split(' ').map(n => n[0]).join('')
}
