module Helpers

  def active(name, class_name = 'active', reverse = false)
    if(class_active = current_page.data.active)
      class_active.split(/[\s,']/)
      if(reverse)
        class_name if(!class_active.include?(name))
      else
        class_name if(class_active.include?(name))
      end
    end
  end

  def modify(name, return_value = true )
    if(modify = current_page.data.modify)
      modify.split(/[\s,']/)
      return_value if(modify.include?(name))
    end
  end

  def full_url(path)
    "#{config[:host]}#{path}"
  end

end
